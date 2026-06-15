package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type AppItem struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Category    string   `json:"category"`
	Hash        string   `json:"hash"`
	Developer   string   `json:"developer"`
	License     string   `json:"license"`
	FaithSafety string   `json:"faith_safety"`
	Permissions []string `json:"permissions"`
}

var appCatalog = []AppItem{
	{
		ID:          "1",
		Name:        "amina-assistant",
		Category:    "AI & Tools",
		Hash:        "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
		Developer:   "Halal OS Core Team",
		License:     "GPLv3",
		FaithSafety: "Verified Halal - No Inappropriate Content",
		Permissions: []string{"microphone", "local_storage"},
	},
	{
		ID:          "2",
		Name:        "kalam-shell",
		Category:    "System Tools",
		Hash:        "3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8550",
		Developer:   "Halal OS Core Team",
		License:     "GPLv3",
		FaithSafety: "Verified Halal",
		Permissions: []string{"filesystem"},
	},
	{
		ID:          "3",
		Name:        "liberapay-client",
		Category:    "Finance",
		Hash:        "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47",
		Developer:   "Open Source Community",
		License:     "MIT",
		FaithSafety: "Verified Halal - Pure donation platform, no interest (Riba)",
		Permissions: []string{"network"},
	},
}

func getCatalogHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	
	err := json.NewEncoder(w).Encode(appCatalog)
	if err != nil {
		http.Error(w, "Failed to encode catalog: "+err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/api/catalog", getCatalogHandler)
	
	port := ":8080"
	fmt.Printf("☪ Halal OS Store Server running on port %s...\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
