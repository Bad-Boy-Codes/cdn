setInterval(() => {
            const life = Math.floor(((Date.now() - 1134024300000 ) / 3.1556926e10) * 1e8) / 1e8;
            document.getElementById('life').innerText =
                life + '0'.repeat(11 - life.toString().length);
        }, 100);