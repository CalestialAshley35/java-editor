// Initialize CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default",
    tabSize: 2,
    lineWrapping: true
});

// Run the code in the editor
document.getElementById("run-code").addEventListener("click", function() {
    const code = editor.getValue();
    const outputElement = document.getElementById("output");

    try {
        // Clear previous output
        outputElement.textContent = '';

        // Use eval to run the code
        const result = eval(code);
        
        if (result !== undefined) {
            outputElement.textContent = result;
        }
    } catch (error) {
        outputElement.textContent = error.message;
    }
});
