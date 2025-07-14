const fs = require('fs');

// ─────────────────────────────────────────────────────
// 1. Create a file and write initial content
// ─────────────────────────────────────────────────────
/*
fs.writeFile('hello.txt', 'Hello from Yashswi Sharma', (err) => {
    if (err) {
        console.error("Error creating file:", err);
    } else {
        console.log("✅ File 'hello.txt' created successfully.");
    }
});
*/

// ─────────────────────────────────────────────────────
// 2. Read an image file and write a copy of it
// ─────────────────────────────────────────────────────
/*
fs.readFile('yashswi sign.jpeg', (err, data) => {
    if (err) {
        console.error("Error reading image file:", err);
        return;
    }

    fs.writeFile('output.png', data, () => {
        console.log("✅ Image copied to 'output.png'");
    });

    // Optional: View hex data of the image
    // console.log('Hex:', data.toString('hex'));
});
*/

// ─────────────────────────────────────────────────────
// 3. Read a text file and perform string operations
// ─────────────────────────────────────────────────────
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading text file:", err);
        return;
    }

    console.log("📄 Full Content:\n", data);
    console.log("🔹 First 8 characters:", data.slice(0, 8));
    console.log("🔹 Split by comma:", data.split(','));
    console.log("🔹 Character at index 7:", data.charAt(7));
});

// ─────────────────────────────────────────────────────
// 4. Append text to an existing file
// ─────────────────────────────────────────────────────
/*
fs.appendFile('hello.txt', '\nMy age is 19 years old', (err) => {
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("✅ Text appended to 'hello.txt'");
    }
});
*/

