import { Dota2Heroes, HeroName, Complexity, Attribute } from "./hero-types";

const imageLinks = [
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png",
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
];

const heroesComplexities = [
  "1", // Abaddon 🔴 - EASY
  "1", // Alchemist 🟢 - EASY
  "2", // Ancient Apparition 🔵 - MEDIUM
  "1", // Anti-Mage 🟢 - EASY
  "3", // Arc Warden 🟢 - HARD
  "1", // Axe 🔴 - EASY
  "2", // Bane 🔵 - MEDIUM
  "2", // Batrider 🔵 - MEDIUM
  "2", // Beastmaster 🔴 - HARD
  "1", // Bloodseeker 🟢 - EASY
  "1", // Bounty Hunter 🟢 - EASY
  "3", // Brewmaster 🔴 - HARD
  "1", // Bristleback 🔴 - HARD
  "2", // Broodmother 🟢 - MEDIUM
  "1", // Centaur Warrunner 🔴 - EASY
  "1", // Chaos Knight 🔴 - EASY
  "3", // Chen 🔵 - HARD
  "2", // Clinkz 🟢 - MEDIUM
  "2", // Clockwerk 🔴 - MEDIUM
  "1", // Crystal Maiden 🔵 - EASY
  "1", // Dark Seer 🔵 - MEDIUM
  "2", // Dark Willow 🔵 - MEDIUM
  "1", // Dawnbreaker 🔴 - EASY
  "1", // Dazzle 🔵 - EASY
  "1", // Death Prophet 🔵 - EASY
  "2", // Disruptor 🔵 - MEDIUM
  "2", // Doom 🔴 - HARD
  "1", // Dragon Knight 🔴 - HARD
  "1", // Drow Ranger 🟢 - EASY
  "3", // Earth Spirit 🔴 - HARD
  "2", // Earthshaker 🔴 - MEDIUM
  "2", // Elder Titan 🔴 - HARD
  "2", // Ember Spirit 🟢 - MEDIUM
  "2", // Enchantress 🔵 - MEDIUM
  "2", // Enigma 🔵 - MEDIUM
  "2", // Faceless Void 🟢 - MEDIUM
  "2", // Grimstroke 🔵 - MEDIUM
  "1", // Gyrocopter 🟢 - EASY
  "2", // Hoodwink 🟢 - MEDIUM
  "1", // Huskar 🔴 - HARD
  "3", // Invoker 🔵 - HARD
  "3", // IO 🔴 - HARD
  "1", // Jakiro 🔵 - EASY
  "1", // Juggernaut 🟢 - EASY
  "2", // Keeper of the Light 🔵 - MEDIUM
  "2", // Kunkka 🔴 - HARD
  "1", // Legion Commander 🔴 - EASY
  "1", // Leshrac 🔵 - EASY
  "1", // Lich 🔵 - EASY
  "2", // Lifestealer 🔴 - HARD
  "1", // Lina 🔵 - EASY
  "1", // Lion 🔵 - EASY
  "3", // Lone Druid 🟢 - HARD
  "1", // Luna 🟢 - EASY
  "2", // Lycan 🔴 - HARD
  "2", // Magnus 🔴 - MEDIUM
  "2", // Marci 🔴 - MEDIUM
  "1", // Mars 🔴 - EASY
  "1", // Medusa 🟢 - EASY
  "3", // Meepo 🟢 - HARD
  "2", // Mirana 🟢 - MEDIUM
  "2", // Monkey King 🟢 - MEDIUM
  "3", // Morphling 🟢 - HARD
  "1", // Muerta 🔵 - EASY
  "2", // Naga Siren 🟢 - MEDIUM
  "2", // Nature’s Prophet 🔵 - MEDIUM
  "1", // Necrophos 🔵 - EASY
  "1", // Night Stalker 🔴 - EASY
  "2", // Nyx Assassin 🟢 - MEDIUM
  "1", // Ogre Magi 🔵 - EASY
  "1", // Omniknight 🔴 - EASY
  "3", // Oracle 🔵 - HARD
  "2", // Outworld Destroyer 🔵 - MEDIUM
  "2", // Pangolier 🟢 - MEDIUM
  "1", // Phantom Assassin 🟢 - EASY
  "2", // Phantom Lancer 🟢 - MEDIUM
  "2", // Phoenix 🔴 - HARD
  "1", // Primal Beast 🔴 - EASY
  "2", // Puck 🔵 - MEDIUM
  "2", // Pudge 🔴 - MEDIUM
  "2", // Pugna 🔵 - MEDIUM
  "2", // Queen of Pain 🔵 - MEDIUM
  "1", // Razor 🟢 - EASY
  "1", // Riki 🟢 - EASY
  "3", // Rubick 🔵 - HARD
  "2", // Sand King 🔴 - MEDIUM
  "2", // Shadow Demon 🔵 - MEDIUM
  "2", // Shadow Fiend 🟢 - MEDIUM
  "1", // Shadow Shaman 🔵 - EASY
  "2", // Silencer 🔵 - MEDIUM
  "1", // Skywrath Mage 🔵 - EASY
  "1", // Slardar 🔴 - EASY
  "2", // Slark 🟢 - MEDIUM
  "1", // Snapfire 🔴 - EASY
  "1", // Sniper 🟢 - EASY
  "2", // Spectre 🟢 - MEDIUM
  "1", // Spirit Breaker 🔴 - EASY
  "2", // Storm Spirit 🔵 - MEDIUM
  "1", // Sven 🔴 - HARD
  "2", // Techies 🔵 - MEDIUM
  "2", // Templar Assassin 🟢 - MEDIUM
  "2", // Terrorblade 🟢 - MEDIUM
  "1", // Tidehunter 🔴 - EASY
  "2", // Timbersaw 🔴 - MEDIUM
  "2", // Tinker 🔵 - HARD
  "2", // Tiny 🔴 - MEDIUM
  "2", // Treant Protector 🔴 - MEDIUM
  "2", // Troll Warlord 🟢 - MEDIUM
  "1", // Tusk 🔴 - EASY
  "2", // Underlord 🔴 - MEDIUM
  "1", // Undying 🔴 - EASY
  "1", // Ursa 🟢 - EASY
  "1", // Vengeful Spirit 🟢 - EASY
  "1", // Venomancer 🟢 - MEDIUM
  "1", // Viper 🟢 - EASY
  "3", // Visage 🔵 - HARD
  "2", // Void Spirit 🔵 - MEDIUM
  "1", // Warlock 🔵 - EASY
  "2", // Weaver 🟢 - MEDIUM
  "2", // Windranger 🔵 - MEDIUM
  "2", // Winter Wyvern 🔵 - MEDIUM
  "1", // Witch Doctor 🔵 - EASY
  "1", // Wraith King 🔴 - EASY
  "1", // Zeus 🔵 - EASY
];

const attributesWithNames = [
  { name: "Abaddon", attribute: "universal" },
  { name: "Alchemist", attribute: "Strength" },
  { name: "Ancient Apparition", attribute: "Intelligence" },
  { name: "Anti-Mage", attribute: "Agility" },
  { name: "Arc Warden", attribute: "Agility" },
  { name: "Axe", attribute: "Strength" },
  { name: "Bane", attribute: "universal" },
  { name: "Batrider", attribute: "universal" },
  { name: "Beastmaster", attribute: "universal" },
  { name: "Bloodseeker", attribute: "Agility" },
  { name: "Bounty Hunter", attribute: "Agility" },
  { name: "Brewmaster", attribute: "universal" },
  { name: "Bristleback", attribute: "Strength" },
  { name: "Broodmother", attribute: "universal" },
  { name: "Centaur Warrunner", attribute: "Strength" },
  { name: "Chaos Knight", attribute: "Strength" },
  { name: "Chen", attribute: "universal" },
  { name: "Clinkz", attribute: "Agility" },
  { name: "Clockwerk", attribute: "universal" },
  { name: "Crystal Maiden", attribute: "Intelligence" },
  { name: "Dark Seer", attribute: "universal" },
  { name: "Dark Willow", attribute: "universal" },
  { name: "Dawnbreaker", attribute: "Strength" },
  { name: "Dazzle", attribute: "universal" },
  { name: "Death Prophet", attribute: "Intelligence" },
  { name: "Disruptor", attribute: "Intelligence" },
  { name: "Doom", attribute: "Strength" },
  { name: "Dragon Knight", attribute: "Strength" },
  { name: "Drow Ranger", attribute: "Agility" },
  { name: "Earth Spirit", attribute: "Strength" },
  { name: "Earthshaker", attribute: "Strength" },
  { name: "Elder Titan", attribute: "Strength" },
  { name: "Ember Spirit", attribute: "Agility" },
  { name: "Enchantress", attribute: "Intelligence" },
  { name: "Enigma", attribute: "universal" },
  { name: "Faceless Void", attribute: "Agility" },
  { name: "Grimstroke", attribute: "Intelligence" },
  { name: "Gyrocopter", attribute: "Agility" },
  { name: "hoodwink", attribute: "Agility" },
  { name: "Huskar", attribute: "Strength" },
  { name: "Invoker", attribute: "universal" },
  { name: "Io", attribute: "universal" },
  { name: "Jakiro", attribute: "Intelligence" },
  { name: "Juggernaut", attribute: "Agility" },
  { name: "Keeper of the Light", attribute: "Intelligence" },
  { name: "Kunkka", attribute: "Strength" },
  { name: "Legion Commander", attribute: "Strength" },
  { name: "Leshrac", attribute: "Intelligence" },
  { name: "Lich", attribute: "Intelligence" },
  { name: "Lifestealer", attribute: "Strength" },
  { name: "Lina", attribute: "Intelligence" },
  { name: "Lion", attribute: "Intelligence" },
  { name: "Lone Druid", attribute: "universal" },
  { name: "Luna", attribute: "Agility" },
  { name: "Lycan", attribute: "universal" },
  { name: "Magnus", attribute: "universal" },
  { name: "marci", attribute: "universal" },
  { name: "mars", attribute: "strenth" },
  { name: "Medusa", attribute: "Agility" },
  { name: "Meepo", attribute: "Agility" },
  { name: "Mirana", attribute: "universal" },
  { name: "Monkey King", attribute: "Agility" },
  { name: "Morphling", attribute: "Agility" },
  { name: "Muerta", attribute: "Intelligence" },
  { name: "Naga Siren", attribute: "Agility" },
  { name: "Nature's Prophet", attribute: "Intelligence" },
  { name: "Necrophos", attribute: "Intelligence" },
  { name: "night stalker", attribute: "Strength" },
  { name: "Nyx Assassin", attribute: "universal" },
  { name: "Ogre Magi", attribute: "Strength" },
  { name: "Omniknight", attribute: "Strength" },
  { name: "Oracle", attribute: "Intelligence" },
  { name: "Outworld Destroyer", attribute: "Intelligence" },
  { name: "Pangolier", attribute: "universal" },
  { name: "Phantom Assassin", attribute: "Agility" },
  { name: "Phantom Lancer", attribute: "Agility" },
  { name: "Phoenix", attribute: "universal" },
  { name: "primal beast", attribute: "Strength" },
  { name: "Puck", attribute: "Intelligence" },
  { name: "Pudge", attribute: "Strength" },
  { name: "Pugna", attribute: "Intelligence" },
  { name: "Queen of Pain", attribute: "Intelligence" },
  { name: "Razor", attribute: "Agility" },
  { name: "Riki", attribute: "Agility" },
  { name: "Rubick", attribute: "Intelligence" },
  { name: "Sand King", attribute: "universal" },
  { name: "Shadow Demon", attribute: "Intelligence" },
  { name: "Shadow Fiend", attribute: "Agility" },
  { name: "Shadow Shaman", attribute: "Intelligence" },
  { name: "Silencer", attribute: "Intelligence" },
  { name: "Skywrath Mage", attribute: "Intelligence" },
  { name: "Slardar", attribute: "Strength" },
  { name: "Slark", attribute: "Agility" },
  { name: "Snapfire", attribute: "universal" },
  { name: "Sniper", attribute: "Agility" },
  { name: "Spectre", attribute: "Agility" },
  { name: "Spirit Breaker", attribute: "Strength" },
  { name: "Storm Spirit", attribute: "Intelligence" },
  { name: "Sven", attribute: "Strength" },
  { name: "Techies", attribute: "universal" },
  { name: "Templar Assassin", attribute: "Agility" },
  { name: "Terrorblade", attribute: "Agility" },
  { name: "Tidehunter", attribute: "Strength" },
  { name: "Timbersaw", attribute: "universal" },
  { name: "Tinker", attribute: "Intelligence" },
  { name: "Tiny", attribute: "Strength" },
  { name: "Treant Protector", attribute: "Strength" },
  { name: "Troll Warlord", attribute: "Agility" },
  { name: "Tusk", attribute: "Strength" },
  { name: "Underlord", attribute: "Strength" },
  { name: "Undying", attribute: "Strength" },
  { name: "Ursa", attribute: "Agility" },
  { name: "Vengeful Spirit", attribute: "universal" },
  { name: "Venomancer", attribute: "universal" },
  { name: "Viper", attribute: "Agility" },
  { name: "Visage", attribute: "universal" },
  { name: "Void Spirit", attribute: "universal" },
  { name: "Warlock", attribute: "Intelligence" },
  { name: "Weaver", attribute: "Agility" },
  { name: "Windranger", attribute: "universal" },
  { name: "Winter Wyvern", attribute: "universal" },
  { name: "Witch Doctor", attribute: "Intelligence" },
  { name: "Wraith King", attribute: "Strength" },
  { name: "Zeus", attribute: "Intelligence" },
];

//yeeeh i know -------------@@@

export const dota2Heroes: Dota2Heroes = attributesWithNames.map(
  (hero, index) => {
    return {
      name: hero.name.toLowerCase() as HeroName,
      image: imageLinks[index],
      complexity: heroesComplexities[index] as Complexity,
      attribute: hero.attribute.toLocaleLowerCase() as Attribute,
    };
  }
);
