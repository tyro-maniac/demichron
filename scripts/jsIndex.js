    const lines = [
      "test aaaaaa",
      "",
      ""
    ];

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 50; // ms per character
    let typing = false;

    function typeLine(line, callback) {
      typing = true;
      const target = document.getElementById("typewriter");
      target.textContent = ""; // clear previous line

      function typeChar() {
        if (charIndex < line.length) {
          target.textContent += line.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, speed);
        } else {
          typing = false;
          charIndex = 0;
          if (callback) callback();
        }
      }

      typeChar();
    }

    function nextLine() {
      if (typing) return;
      if (lineIndex < lines.length) {
        typeLine(lines[lineIndex], () => {
          lineIndex++;
        });
      }
    }

    document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        nextLine();
      }
    });

    // start first line
    nextLine();