package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files from the public directory
	fs := http.FileServer(http.Dir("./public"))
	http.Handle("/", fs)

	port := ":8083"
	log.Printf("Server starting on http://localhost%s\n", port)
	
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}
}
