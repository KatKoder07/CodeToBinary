# 💻 CodeToBinary

A sleek, client-side web application that automatically detects programming languages and converts source code into its raw 8-bit ASCII binary representation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 🚀 Features

* **Real-time Conversion:** Instantly transforms text into binary as you type.
* **Auto-Language Detection:** Uses [Highlight.js](https://highlightjs.org/) to identify the source language (Python, JS, C++, etc.) automatically.
* **Binary Formatting:** Outputs clean, 8-bit padded binary strings for maximum readability.
* **Responsive UI:** Dark-mode optimized interface that works on desktops and mobile devices.
* **Privacy Focused:** No data is sent to a server; all processing happens locally in your browser.

## 🛠️ Tech Stack

* **HTML5 / CSS3:** Custom properties (CSS variables) and Flexbox layout.
* **JavaScript (ES6):** Logic for character-to-binary conversion.
* **Highlight.js:** For intelligent syntax and language pattern recognition.

## 📂 Project Structure

```text
CODETOBINARY/
├── index.html     # Main application structure
├── style.css      # Custom UI styling and theme
├── script.js      # Core logic and event handling
└── README.md      # Project documentation