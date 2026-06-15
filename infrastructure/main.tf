terraform {
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
  }
}

variable "hcloud_token" {
  type        = string
  description = "Hetzner Cloud API Token"
  sensitive   = true
}

provider "hcloud" {
  token = var.hcloud_token
}

/* Provision central Halal Cloud Sync storage node server */
resource "hcloud_server" "cloud_sync_master" {
  name        = "halal-cloud-sync-master"
  image       = "debian-12"
  server_type = "cx21" # 2 vCPU, 4GB RAM, 40GB SSD
  location    = "fsn1" # Falkenstein, Germany (Excellent latency Middle East/Europe)

  labels = {
    project = "halal-os"
    role    = "sync-microservice"
  }

  public_net {
    ipv4_enabled = true
    ipv6_enabled = true
  }

  user_data = <<-EOF
              #!/bin/bash
              apt-get update && apt-get install -y docker.io docker-compose ufw
              # Force strict firewall policies block incoming telemetry tracking
              ufw default deny incoming
              ufw default allow outgoing
              ufw allow 22/tcp
              ufw allow 80/tcp
              ufw allow 443/tcp
              ufw allow 8080/tcp # Keycloak auth
              ufw allow 9000/tcp # Cloud gateway
              ufw --force enable
              EOF
}

output "server_ipv4" {
  value       = hcloud_server.cloud_sync_master.ipv4_address
  description = "Public IP address of the provisioned Halal Cloud Sync server node"
}
