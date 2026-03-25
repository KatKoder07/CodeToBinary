# Technical Architecture

This document explains the underlying logic of the CodeToBinary converter.

## 1. Character Encoding
The application processes input as **UTF-16** code units. Each character is accessed using the `charCodeAt()` method, which returns an integer between 0 and 65535.

## 2. Binary Transformation
To convert the integer to a binary string, we use:
```javascript
const binaryStr = charCode.toString(2).padStart(8, '0');