    let outputUpper = document.querySelector('#upper');
    let outputLower = document.querySelector('#lower');

    function pressNum(e) {
      if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    function pressAllClear() {
      outputUpper.innerHTML = '';
      outputLower.innerHTML = '0';
    }

    function pressClear() {
      outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
    }

    function pressEqual() {
      let exp = outputLower.innerHTML;
      outputUpper.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
        result = eval(exp);
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(4);
        }
      } catch (e) {
        result = 'Error';
      }
      outputLower.innerHTML = result;
    }

    function pressOperator(e) {
      let lastOperator = outputLower.innerHTML.slice(-1);
      if (lastOperator === '+' || lastOperator === '-' || lastOperator === '×' || lastOperator === '÷') {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    function pressDot() {
      outputLower.innerHTML += '.';
    }

    function pressBracket(e) {
      outputLower.innerHTML += e.innerHTML;
    }

    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case '0':
          pressNum(document.querySelector('button:nth-child(2)'));
          break;
        case '1':
          pressNum(document.querySelector('button:nth-child(5)'));
          break;
        case '2':
          pressNum(document.querySelector('button:nth-child(6)'));
          break;
        case '3':
          pressNum(document.querySelector('button:nth-child(7)'));
          break;
        case '4':
          pressNum(document.querySelector('button:nth-child(9)'));
          break;
        case '5':
          pressNum(document.querySelector('button:nth-child(10)'));
          break;
        case '6':
          pressNum(document.querySelector('button:nth-child(11)'));
          break;
        case '7':
          pressNum(document.querySelector('button:nth-child(13)'));
          break;
        case '8':
          pressNum(document.querySelector('button:nth-child(14)'));
          break;
        case '9':
          pressNum(document.querySelector('button:nth-child(15)'));
          break;
        case '+':
          pressOperator(document.querySelector('button:nth-child(4)'));
          break;
        case '-':
          pressOperator(document.querySelector('button:nth-child(8)'));
          break;
        case '*':
          pressOperator(document.querySelector('button:nth-child(12)'));
          break;
        case '/':
          pressOperator(document.querySelector('button:nth-child(16)'));
          break;
        case '.':
          pressDot();
          break;
        case '(':
          pressBracket(document.querySelector('button:nth-child(18)'));
          break;
        case ')':
          pressBracket(document.querySelector('button:nth-child(19)'));
          break;
        case 'Enter':
          e.preventDefault();
          pressEqual();
          break;
        case 'Backspace':
          pressClear();
          break;
        case 'Escape':
          pressAllClear();
          break;
      }
    });
  