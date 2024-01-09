package main

import (
	"fmt"
	"log"
	"github.com/go-resty/resty/v2"
)

func main() {
	// Replace these with your actual API endpoint and JSON payload
	apiEndpoint := "https://collections.newberry.org/API/search/v3.0/search?query=MediaEncryptedIdentifier:2KXJ8ZBOA10D"
	jsonPayload := `{"MediaEncryptedIdentifier": "2KXJ8ZBOA10D", "CoreField.IIIF-Resource-Type": "Canvas"}`

	// Create a Resty client
	client := resty.New()

	// Create a custom header with the condition
	header := map[string]string{
		"Custom-Header": "MediaEncryptedIdentifier=2KXJ8ZBOA10D",
	}

	// Make the POST request
	resp, err := client.R().
		SetHeader("Content-Type", "application/json").
		SetHeaders(header).
		SetBody(jsonPayload).
		Post(apiEndpoint)

	// Check for errors
	if err != nil {
		log.Fatalf("Error making POST request: %v", err)
	}

	// Print the response
	fmt.Println("Response Status:", resp.Status())
	fmt.Println("Response Body:", resp.String())
}
