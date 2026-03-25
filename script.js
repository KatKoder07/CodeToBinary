document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputCode');
    const output = document.getElementById('outputBinary');
    const langDisplay = document.getElementById('detectedLang');

    // Listen for typing or pasting in the text area
    input.addEventListener('input', () => {
        const code = input.value;
        
        // Handle empty state
        if (!code.trim()) {
            output.value = '';
            langDisplay.textContent = 'Awaiting Input...';
            return;
        }

        // 1. Auto-Detect the language using Highlight.js
        try {
            const result = hljs.highlightAuto(code);
            // Highlight.js returns the language it thinks fits best
            langDisplay.textContent = result.language ? result.language.toUpperCase() : 'UNKNOWN';
        } catch (e) {
            langDisplay.textContent = 'ERROR DETECTING';
        }

        // 2. Convert text string to binary array
        const binaryArray = [];
        for (let i = 0; i < code.length; i++) {
            // Get the ASCII/UTF-16 code of the character
            const charCode = code.charCodeAt(i);
            // Convert to base-2 (binary) and pad with leading zeros to make it 8 bits
            const binaryStr = charCode.toString(2).padStart(8, '0');
            binaryArray.push(binaryStr);
        }

        // Join the array with spaces and output it
        output.value = binaryArray.join(' ');
    });
});