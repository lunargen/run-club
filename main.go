package main

import (
	"fmt"
	"net/http"
)

func catchAll(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./client/dist/index.html")
}

func main() {
	http.HandleFunc("/", catchAll)
	http.Handle("/assets/", http.FileServer(http.Dir("./client/dist/assets")))

	fmt.Println("Server listening on port 80")
	http.ListenAndServe(":80", nil)
}
