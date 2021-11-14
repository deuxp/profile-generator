const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const answers = [];
const rl = readline.createInterface({ input, output });

/*
// old way .. easier to see
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

*/

// all of the following events must happen nested within the first async call, to be a part of the same event loop
// essentially to run this asynchronous funtion synchronoulsly

// question 1
rl.question('What album are you listening to on repeat, right now? ', (answer) => {
  answers.push(answer);

  // nested question 2:
  rl.question('What is your favourite meal to cook? ', (answer) => {
    answers.push(answer);

    // nested question 3:
    rl.question('What is your favourite food to order? ', (answer) => {
      answers.push(answer);

      rl.question('Finish the following sentence: I\'m at work, but I would rather be ______', (answer) => {
        answers.push(answer);

        //close out async questionnaire
        // console.log('#inside answers --> ', answers); // logs the nests' return
        console.log(`After a failed attempt at making ${answers[1]}, waits patiently for ${answers[2]} to arrive, while humming ${answers[0]}.. There is ${answers[3]} to be done!`);
        rl.close(); // this has to close out all of the nests
    
      });
    });
  });
});
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// question 2
// const survey_data = [{
//   q: "What's your favorite animal",
//   a: null
//  }];
//  function ask(rl, survey_data, position = 0, response) {
//       if(!survey_data[position]) { // index out of range
//         generateResults(survey_data)
//         r.close()
//       }
//       ask(rl, survey_data, position++, rl.question(survey_data[position].q, (answer) => {
//             survey_dta[position].a = answer
//       });
//  }


// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================

// const rl = require('readline')

// const survey_data = [{
//  q: "What's your favorite animal",
//  a: null
// }];
// function generateResults(survey_data) {
//   for (let i in survey_data) {
//     console.log(`${survey_data[i].q}: ${survey_data[i].a}`)
//   }
//   return;
// }

// function ask(rl, survey_data, position = 0) {
//      if(!survey_data[position]) { // base case // BREAK POINT -- condition to stop -- like while
//        generateResults(survey_data)
//        rl.close()
//      } else {
//        // async call happening as the recursive case
//        rl.question(`${survey_data[position].q}? `, (answer) => {
//           survey_data[position].a = answer
//           position += 1; // incrememnts towards the base case
//           ask(rl, survey_data, position)
//        })
//      }
// }

// ask(rl, survey_data)












// let a = [];
// rl.question('Q1? ', (answer) => {});


/*
do like madlibs each bridge words to the questions being
asked should be put in a sentence like mad libs.
[] answers pushed to array
[] where to print since it all has to happen in the async flow
[] how to return a value.. not just push to a list .. is that even useful?

*/