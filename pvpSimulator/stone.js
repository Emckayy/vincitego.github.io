const stones = {
	'None': {},
	'S3 Attack, Attack': { attack: 4000, attackPercent: 0.37 },
	'S3 Attack, Attack, Armor Break': { attack: 1550, attackPercent: 0.24, armorBreak: 0.5 },
	'S3 Attack, Attack, Holy': { attack: 1550, attackPercent: 0.24, holyDamage: 0.36 },
	'S3 Attack, Attack, Precision': { attack: 1550, attackPercent: 0.24, precision: 0.24 },
	'S3 Attack, Attack, Skill': { attack: 1550, attackPercent: 0.24, skillDamage: 0.8 },
	'S3 Attack, Block': { attackPercent: 0.28, block: 0.28 },
	'S3 Crit, Armor Break': { crit: 0.23, armorBreak: 0.5 },
	'S3 Crit, Crit, Attack': { attackPercent: 0.1, crit: 0.23, critDamage: 0.55 },
	'S3 Crit, Precision': { precision: 0.23, crit: 0.23 },
	'S3 HP, Attack': { hpPercent: 0.33, attackPercent: 0.26 },
	'S3 HP, Attack, Holy': { hpPercent: 0.28, attack: 1550, holyDamage: 0.36 },
	'S3 HP, Block': { hpPercent: 0.35, block: 0.28 },
	'S3 HP, Crit': { hpPercent: 0.33, crit: 0.23 },
	'S3 HP, Heal': { hpPercent: 0.33, effectBeingHealed: 0.29 },
	'S3 HP, Heal, Attack': { hpPercent: 0.28, attack: 1550, healEffect: 0.29 },
	'S3 HP, HP': { hp: 25000, hpPercent: 0.46 },
	'S3 HP, Precision': { hpPercent: 0.33, precision: 0.24 },
	'S3 Skill, Holy': { skillDamage: 0.8, holyDamage: 0.36 },
	'S3 Skill, Precision': { skillDamage: 0.8, precision: 0.23 },
	'S3 Speed, Attack': { attackPercent: 0.26, speed: 115 },
	'S3 Speed, Crit': { speed: 115, crit: 0.23 },
	'S3 Speed, Heal': { speed: 115, healEffect: 0.29 },
	'S3 Speed, HP': { hpPercent: 0.32, speed: 115 },
	'S3 Speed, Precision': { speed: 115, precision: 0.23 },
};


if (typeof module !== 'undefined') {
	module.exports = { stones };
}