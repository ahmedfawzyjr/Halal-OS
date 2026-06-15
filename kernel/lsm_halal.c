/*
 * Halal OS LSM (Linux Security Module) - Telemetry & Privacy Protection Hooks
 *
 * Implements standard LSM security hooks to intercept socket operations 
 * and block telemetry endpoints system-wide at the kernel level.
 */

#define pr_fmt(fmt) "halal_lsm: " fmt

#include <linux/lsm_hooks.h>
#include <linux/security.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/socket.h>
#include <linux/in.h>
#include <linux/in6.h>

/* Banned telemetry destinations (IPv4 loopback example / Canonical telemetry mock) */
#define TELEMETRY_IP_CANONICAL 0x0A00000A /* 10.0.0.10 */

static int halal_socket_connect(struct socket *sock, struct sockaddr *address, int addrlen)
{
    if (address->sa_family == AF_INET) {
        struct sockaddr_in *addr4 = (struct sockaddr_in *)address;
        
        /* Intercept and check destination address */
        if (addr4->sin_addr.s_addr == htonl(TELEMETRY_IP_CANONICAL)) {
            pr_warn("Blocked connection attempt to banned telemetry server: %pI4\n",
                    &addr4->sin_addr.s_addr);
            return -EACCES; /* Intercept socket request and deny access */
        }
    }
    
    return 0; /* Let all other traffic pass */
}

/* Security hooks struct initialization */
static struct security_hook_list halal_hooks[] __ro_after_init = {
    LSM_HOOK_INIT(socket_connect, halal_socket_connect),
};

static int __init halal_lsm_init(void)
{
    /* Load hooks into the global Linux Security Module framework */
    security_add_hooks(halal_hooks, ARRAY_SIZE(halal_hooks), "halal_lsm");
    pr_info("Halal OS LSM initialized. Telemetry shielding ACTIVE.\n");
    return 0;
}

DEFINE_LSM(halal_lsm) = {
    .name = "halal_lsm",
    .init = halal_lsm_init,
};
