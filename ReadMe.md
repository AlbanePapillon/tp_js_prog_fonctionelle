# Pokémon Type Count by Generation

This Node.js script reads data from a CSV file containing Pokémon information and calculates the count of Pokémon types for each generation. It uses the fs module to read the CSV file, PapaParse library to parse the CSV data, and Ramda library for functional programming utilities.
## Prerequisites

Node.js installed on your machine
The following dependencies installed:
* fs: Node.js built-in module (no installation required)
* ramda: ` npm install ramda `
* papaparse: `npm install papaparse`

## Usage

Place the CSV file (pokemon.csv) in the same directory as the script.

Install the required dependencies by running the following command in the terminal:

`npm install ramda papaparse`

Run the script using the following command:

`node script.js`

The script will read the CSV file, process the data, and display the Pokémon type counts for each generation.

## CSV File Format

The CSV file should have the following headers:

* Index: Pokémon index
* Name: Pokémon name
* Type1: Primary type
* Type2: Secondary type (optional)
* Total: Total base stats
* HP: Hit Points (HP) stat
* Attack: Attack stat
* Defense: Defense stat
* SpAtk: Special Attack stat
* SpDef: Special Defense stat
* Speed: Speed stat
* Generation: Pokémon generation
* Legendary: Indicates if the Pokémon is legendary (True/False)

Make sure the CSV file follows this format for the script to work correctly.

## Output

The script will output the Pokémon type counts for each generation in the following format:

```
[
{
generation: 1,
types: [
  { type: 'type1', count: 12 },
  { type: 'type2', count: 8 },
  ...
]
},
{
generation: 2,
types: [
  { type: 'type1', count: 10 },
  { type: 'type2', count: 6 },
  ...
]
},
...
]
```

Each element in the output array represents a generation. It contains the generation number and an array of types with their corresponding count.

## Customization

If you want to analyze only a specific generation, you can modify the gens array to include only the desired generation numbers. For example, if you want to analyze generation 1 and 2, modify the following line:

`const gens = R.uniq(R.pluck('generation', objects));`

to:

`const gens = [1, 2];`

You can change the name of the CSV file by modifying the csvFile variable at the beginning of the script:

`const csvFile = 'pokemon.csv';`

Feel free to modify the code to suit your specific requirements or add additional functionality as needed.

**Note:** Ensure that the modified code follows the correct syntax and logic to avoid any errors or unexpected behavior.
