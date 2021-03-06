export class Alphabet {
	name: string;
	characters: string;
	indexOfCoincidence: number;
	characterCoincidence: { [key: string]: number };

	constructor(
		name: string,
		characters: string,
		indexOfCoincidence: number,
		characterCoincidence: { [key: string]: number }
	) {
		this.name = name;
		this.characters = characters;
		this.indexOfCoincidence = indexOfCoincidence;
		this.characterCoincidence = characterCoincidence;
	}
}

export const English = new Alphabet(
	'English',
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	0.0667,
	{
		A: 0.082,
		B: 0.015,
		C: 0.028,
		D: 0.043,
		E: 0.127,
		F: 0.022,
		G: 0.02,
		H: 0.061,
		I: 0.07,
		J: 0.002,
		K: 0.008,
		L: 0.04,
		M: 0.024,
		N: 0.067,
		O: 0.075,
		P: 0.019,
		Q: 0.001,
		R: 0.06,
		S: 0.063,
		T: 0.091,
		U: 0.028,
		V: 0.01,
		W: 0.024,
		X: 0.002,
		Y: 0.02,
		Z: 0.001,
	}
);
