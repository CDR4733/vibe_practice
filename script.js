        document.getElementById('generateButton').addEventListener('click', generateAllLottoNumbers);

        function generateLottoSet() {
            const numbers = new Set();
            while (numbers.size < 6) {
                numbers.add(Math.floor(Math.random() * 45) + 1);
            }
            return Array.from(numbers).sort((a, b) => a - b);
        }

        function displayLottoNumbers(lottoSets) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            lottoSets.forEach((set, index) => {
                const setDiv = document.createElement('div');
                setDiv.classList.add('set');
                setDiv.innerHTML = `<strong>세트 ${index + 1}:</strong> `;
                set.forEach(number => {
                    const numberSpan = document.createElement('span');
                    numberSpan.classList.add('number');
                    numberSpan.textContent = number;
                    setDiv.appendChild(numberSpan);
                });
                resultsDiv.appendChild(setDiv);
            });
        }

        function generateAllLottoNumbers() {
            const allLottoSets = [];
            for (let i = 0; i < 5; i++) {
                allLottoSets.push(generateLottoSet());
            }
            displayLottoNumbers(allLottoSets);
        }

        // Generate numbers on initial load as well
        generateAllLottoNumbers();
