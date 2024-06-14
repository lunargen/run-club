package main

import (
	"fmt"
	"net/http"
	"strings"
)

func serveAssets(w http.ResponseWriter, r *http.Request) {
	// Strip the /assets prefix
	filePath := strings.TrimPrefix(r.URL.Path, "/assets/")
	// Serve the file from the /dist/assets directory
	http.ServeFile(w, r, "./dist/assets/"+filePath)
}

func servePublic(w http.ResponseWriter, r *http.Request) {
	// Serve files from the /dist/public directory
	filePath := strings.TrimPrefix(r.URL.Path, "/public/")
	http.ServeFile(w, r, "./dist/"+filePath)
}

func catchAll(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./dist/index.html")
}

func main() {

	http.HandleFunc("/assets/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/assets/") {
			serveAssets(w, r)
		} else {
			http.NotFound(w, r)
		}
	})
	http.HandleFunc("/public/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/public/") {
			servePublic(w, r)
		} else {
			http.NotFound(w, r)
		}
	})

	// Handle all other routes with handleCatchAll
	http.HandleFunc("/", catchAll)
	fmt.Println("Server listening on port 80")
	http.ListenAndServe(":80", nil)
}
