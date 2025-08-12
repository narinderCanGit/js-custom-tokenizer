#!/usr/bin/env node
import readline from "readline"; // Import Node.js readline module for CLI input/output
import Tokenizer from "./tokenizer.js"; // Import custom Tokenizer class
import chalk from "chalk"; // Import chalk for colored console output
// Create readline interface for user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Instantiate the Tokenizer
const tokenizer = new Tokenizer();

// Helper function to prompt user and return their input as a Promise
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Main async function to run CLI logic
async function main() {
  console.log("=== Custom Tokenizer CLI ===");

  // Ask user for text to learn vocabulary from
  const text = await askQuestion("Enter text to learn vocab: ");
  tokenizer.learnVocabFromText(text); // Build vocabulary from input text

  // Display learned vocabulary
  console.log("\n Vocabulary learned:", tokenizer.getVocab());

  // Ask user for text to encode
  const encodeText = await askQuestion("\nEnter text to encode: ");
  const encoded = tokenizer.encode(encodeText); // Encode text to token IDs
  console.log("Encoded:", encoded);

  // Ask user for token IDs to decode
  const decodeInput = await askQuestion(
    "\nEnter token IDs to decode (comma-separated): "
  );

  // Validate input format for decoding
  if (decodeInput.length > 1 && !decodeInput.includes(",")) {
    console.log(
      chalk.red("Error: Please enter token IDs separated by commas (e.g., 1,2,3).")
    );
  } else {
    // Convert input string to array of integers
    const tokenIds = decodeInput
      .split(",")
      .map((id) => parseInt(id.trim(), 10));
    const decoded = tokenizer.decode(tokenIds); // Decode token IDs back to text
    console.log("Decoded:", decoded);
  }

  rl.close(); // Close readline interface
}

main(); // Run the CLI
