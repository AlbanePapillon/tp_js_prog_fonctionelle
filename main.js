import * as fs from 'node:fs';
import * as R from 'ramda';
import Papa from 'papaparse';

const csvFile = 'pokemon.csv';

fs.readFile(csvFile, 'utf8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}

	const parsedData = Papa.parse(data, {header: true}).data;

	const objects = parsedData.map(row => ({
		index: row.Index,
		name: row.Name,
		type1: row.Type1,
		type2: row.Type2,
		total: Number.parseInt(row.Total, 10),
		hp: Number.parseInt(row.HP, 10),
		attack: Number.parseInt(row.Attack, 10),
		defense: Number.parseInt(row.Defense, 10),
		spAtk: Number.parseInt(row.SpAtk, 10),
		spDef: Number.parseInt(row.SpDef, 10),
		speed: Number.parseInt(row.Speed, 10),
		generation: Number.parseInt(row.Generation, 10),
		legendary: row.Legendary === 'True',
	}));

	const countTypesByGeneration = (objects, generation) => {
		const filteredObjects = R.filter(R.propEq(generation, 'generation'), objects);
		const types = R.uniq(R.pluck('type1', filteredObjects));

		const typeCounts = R.map(type => {
			const countType = R.compose(
				R.length,
				R.filter(R.propEq(type, 'type1')),
			)(filteredObjects);

			return {type, count: countType};
		}, R.without([undefined], types));

		const byCount = R.descend(R.prop('count'));
		const typesRanked = R.sort(byCount, typeCounts);

		return {generation, types: typesRanked};
	};

	const gens = R.uniq(R.pluck('generation', objects));

	R.map(generation => {
		console.log(countTypesByGeneration(objects, generation));
		return 0;
	}, R.without([Number.NaN], gens));
});

