const {Client, Intents} = require('discord.js')
 
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    ] });

client.once('ready', () => {
        console.log('Ready!');
        client.user.setActivity('?help');
     });
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === '?gasvsslkr') {
       message.reply(
       '\nStats à atteindre **Counter Slkr avec GAS** \n__GAS__ \nProtection: 110k \nVitesse: 230 \n__C3PO__ \nSanté: 65k \nVitesse: 260 \nPouvoir: 100% \nSanté + Protection: 141k \n__Fives__ \nVitesse: 240 \nArmure: 70 \nSanté + Protection: 140k \n__Han Solo__ \nVitesse: 250 \n__Chewbacca__ \nVitesse: 255');
   }
});
client.on('message', (message) => {
   if (message.content === '?jkrvsslkr') {
       message.reply(
       '\nStats à atteindre **Counter Slkr avec JKR + JKL** \n__Jedi Knight Revan__ \nVitesse: 300 \n__Jedi Knight Luke__ \nVitesse: 200 \nDégâts: 10 000 \n__Bastila Shan__ \nVitesse: 270 \nPouvoir: 50% \n__Ermit Yoda__ \nVitesse: 299 \n__Old Ben__ \nVitesse: 230 \nPouvoir: 75%');
   }
});
client.on('message', (message) => {
   if (message.content === '?dvvsrey') {
       message.reply(
       '\nStats à atteindre **Counter Rey avec Dark Vador** \n__Dark Vador__ \nVitesse: 250 \nChance de CC: 75\n__Grand Admiral Thrawn__ \nVitesse: 280 \nEsquive des critiques: 35 \nSanté + Protection: 120k\n__Bastila Shan Déchue__ \nVitesse: 300 \nPouvoir: 70% \n__Wat Tambor__ \nVitesse: 290 \nPouvoir: 70%\n__Dark Traya__ \nVitesse: 240 \nSanté + Protection: 100k');
   }
});
client.on('message', (message) => {
   if (message.content === '?drvsrey') {
       message.reply(
       '\nStats à atteindre **Counter Rey avec Dark Revan** \n__Dark Revan__ \nVitesse: 320 \n__Grand Admiral Thrawn__ \nVitesse: 280 \nEsquive des critiques: 35 \nSanté + Protection: 120k\n__Bastila Shan Déchue__ \nVitesse: 300 \nPouvoir: 70% \n__Wat Tambor__ \nVitesse: 290 \nPouvoir: 70%\n__Alpha Géonosien__ \nVitesse: 250 \nTénacité: 70%\nSanté + Protection: 150k');
   }
});
 
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === '?gas') {
       message.reply(
       '\nStats à atteindre **Team GAS** \n__GAS__ \nProtection: 110k \nVitesse: 230 \n__Echo__ \nVitesse: 200 \nDégâts: 7000 \nChance de CC: 50 \n__Rex__ \nVitesse: 280 \n__Fives__ \nVitesse: 240 \nArmure: 70 \nSanté + Protection: 170k \n__ARC Trooper__ \nVitesse: 250 \nDégâts: 10500 \nChance de CC: 50');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?padmy') {
       message.reply(
       '\nStats à atteindre **Team Padme + Gmy** \n__Padme__ \nSanté: 75k \nVitesse: 290 \n__Général Kenobi__ \nSanté: 95k \nVitesse: 240 \n__Ahsoka Tano__ \nSanté: 65k \nVitesse: 220 \n__Grand Maître Yoda__ \nSanté: 65k \nVitesse: 300 \n__Barriss Offee__ \nSanté: 60k \nVitesse: 200 \n');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?jkr') {
       message.reply(
       '\nStats à atteindre **Team Jedi Knight Revan** \n__Jedi Knight Revan__ \nVitesse: 300 \n__Bastila Shan__ \nVitesse: 270 \nPouvoir: 50% \n__Jolee Bindo__ \nSanté: 70k \nVitesse: 200 \nTénacité: 95% \n__Grand Maître Yoda__ \nSanté: 65k \nVitesse: 300 \nDégâts Spéciaux: 9000 \n__Hermit Yoda__ \nVitesse: 299 \n');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?c3c') {
       message.reply(
       '\nStats à atteindre **Team Rebelle, CLS et C3C** \n__Commandant Luke Skywalker__ \nVitesse: 270 \nDégâts: 7000 \n__Han Solo__ \nVitesse: 250 \n__Chewbacca__ \nVitesse: 255 \n__C3PO__ \nSanté: 65k \nVitesse: 260 \nPouvoir: 100% \n__3PO et Chewie__ \nVitesse: 280 \n');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?mm') {
       message.reply(
       '\nStats à atteindre **Team Mon Mothma** \n__Mon Mothma__ \nVitesse: 200 \nTenacite: 140% \n__Biggs Darklighter__ \nVitesse: 300 \nVitesse: 210 \nDégâts Critiques: 222% \n__Wedges Antilles__ \nVitesse: 210 \nDégâts: 5000 \n Dégâts Critiques: 190%\n__Capitaine Han Solo__ \nSanté: 50 000 \nVitesse: 230 \nPouvoir: 100% \n__Princesse Leia__ \nVitesse: 280 \nDégâts Critiques: 190% \n__Lando Calrissian__ \nVitesse: 215 \nChance de CC: 80');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?dr') {
       message.reply(
       '\nStats à atteindre **Team Dark Revan** \n__Dark Revan__ \nVitesse: 320 \n__Bastila Shan (déchue)__ \nVitesse: 300 \nPouvoir: 70% \n__Maraudeur Sith__ \nVitesse: 260 \nDégâts: 5000 \n__HK-47__ \nVitesse: 230 \nDégâts: 5000 \n__Dark Malak__ \nProtection: 130k \nTénacité: 140% \nSanté + Protection: 200k');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?gg') {
       message.reply(
       '\nStats à atteindre **Team Général Grievous** \n__Général Grievous__ \nSanté: 130k \nVitesse: 200 \nChance de CC: 70 \nDégâts Critiques: 200% \n__B1__ \nVitesse: 270 \n__B2__ \nPouvoir: 100% \nTénacité: 100% \n__MagnaGuard__ \nTénacité: 100% \n__Droideka__ \nVitesse: 210');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?geo') {
       message.reply(
       '\nStats à atteindre **Team Géonosiens** \n__Alpha Géonosien__ \nVitesse: 250 \nTénacité: 70% \nSanté + Protection: 150k\n__Poggle le Bref__ \nVitesse: 220 \nPouvoir: 80% \n__Sun Fac__ \nSanté + Protection: 100k \n__Soldat Géonosien__ \nChance de CC: 75 \n__Espion Géonosien__ \nVitesse: 220 \nDégâts: 6000 \nChance de CC: 75 \nDégâts Critiques: 228%');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?nute') {
       message.reply(
       '\nStats à atteindre **Team Nute** \n__Nute__ \nVitesse: 260 \n__Comte Dooku__ \nVitesse: 270 \n__Wat Tambor__ \nVitesse: 290 \nPouvoir: 70% \n__Enfys Nest__ \nTénacité: 140% \n__Jango Fett__ \nVitesse: 250 \n');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?ns') {
       message.reply(
       '\nStats à atteindre **Soeurs de la Nuit** \n__Asajj Ventress__ \nVitesse: 220 \nPouvoir: 60% \n__Zombie Soeur de la Nuit__ \nSanté: 30k \nVitesse: 210 \n__Vieille Daka__ \nSanté: 110k \nVitesse: 250 \nPouvoir: 75% \n__Mère Talzin__ \nVitesse: 210 \nPouvoir: 100% \n__Esprit Soeur de la Nuit__ \nVitesse: 260 \nDégâts: 3000 \nPouvoir: 60%');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?trium') {
       message.reply(
       '\nStats à atteindre **Trium** \n__Dark Traya__ \nVitesse: 230 \nSanté + Protection: 100k \n__Dark Nihilus__ \nVitesse: 220 \n__Dark Sion__ \nVitesse: 230 \nSanté + Protection: 100k');
   }
});
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === '?counter-padmyvsgg') {
   message.reply(
       '\n**Padme Gmy vs GG Nute ou BB8** \n__Compo__: Padme lead, AT, GMY, GK, zBariss \n__Compo adverse__: Gg B1 B2 Magna Nute \n__Conditions de combat__: Moddage Padme, AT, GK full santé, speed sur Padme et Gmy; Padme doit être plus rapide que B1 et Nute et Yoda plus rapide que Padme. \n__Stratégie__ : B2, B1 ou BB8 si présent, Magna, GG, nute \n- Spé1 de gmy \n- Spé3 de gmy \n- Padmé spé1 sur b2 \n- AT spé1 sur b2 \n- GK spé2 sur b2 pour le finir \nLe plus dur est fait. Il faut gérer le reste du combat désormais \n__Remod__: ?padmy \n__Vidéo__:https://youtu.be/yR5fANZWs74 https://www.youtube.com/watch?v=ZjSU0Dne6xU')
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-nsvsgg') {
   message.reply(
       '\n**Soeur de la nuit vs GG BB8** \n__Compo__: Daka G13 lead, zombie, talzin, Asajj, Esprit (ou 5e NS G12) \n__Compo adverses__: Compo GG avec BB8. Peut fonctionner avec Nute. Très risqué avec DDK (risque que DDK OS Daka) ou Wat (les persos avec un tech qui tue une cible empêche le revive). \n__Stratégie__: Cest assez simple comme combat. Vos NS vont mourir, mais Daka les ramènera régulièrement augmentant ainsi sa santé. Veillez à tuer un droïde uniquement si Daka a toute sa vie, afin de tenir l aoe de GG. \n__Remod__: **?ns** \n__Vidéo__:https://www.youtube.com/watch?v=oAXleiGUsjE')
   }
});
 
  
client.on('message', (message) => {
   if (message.content === '?counter-jkrvsgg') {
   message.reply(
       '\n**JKR vs GG WAT** \n__Compo__: Jkr lead, Bastilla, Gmy, Jolee, Ermit Yoda \n__Compo adverse__: Gg lead, b1, b2, magna wat \n__Conditions de combat__: Jolee G13 \n__Stratégie__: Il faut maîtriser wat (ability block, stun) avec bastilla, gmy, pour l’empêcher de faire revive b2, et focus b2 direct avec la spe2 de jkr. Une fois b2 à terre, focus wat puis b1 et gg. \n__Remod__: **?jkr** \n__Vidéo__: https://www.youtube.com/watch?v=16edpfjMzaA')
   }
});
 
client.on('message', (message) => {
   if (message.content === '?counter-gasvsslkr') {
   message.reply(
       '\n**Gas vs SLKR** \n__Compo__:Gas Chewi Han C3po 5s \n__Compo adverses__: Sklr Hux Kru Off Red, Sklr Hux Kru Red Storm, Sklr Hux Kru Red Malak \n__Conditions de combat__: Moddage particulier de la team, Ordre de speed de la team (cf tableau modding) \n__Stratégie__: \n1 Stun red avec han Sklr + mass assist hux - - >gas à genoux \n2 call de 5 sur c3po sur kru--> confusion \n3 spe 2 de c3po sur han sur storm ou malak ou kru--> Confusion \n4 debuff chewi \n5 primaire de han sur red-->tuer red \n6 tuer storm ou off ou malak \n7 encaisser l ulti, maintenir kru sous Confusion, taper sklr avec Primaire de han, primaire 5, spe2 de chewi, call de 5 sur gas ou han, call de c3po sur gas ou 5. \n__Remod__: **?gasvsslkr** \n__Vidéo__: https://youtu.be/C0lNtLrIOPM')
   }
});
  
client.on('message', (message) => {
   if (message.content === '?counter-dvvsrey') {
   message.reply(
       '\n**Dark Vador vs Rey** \n__Compo__: Dark Vador DarkTraya Bastila Shan Déchue Wat Tambor Grand Admiral Thrawn \n__Compo adverses__: Rey avec Malak ou JTR + Holdo \n__Stratégie__: \nSpé 4 de WAT sur DV \nDV spé 3 en visant Rey \nDV: spé 1 sur Rey \nDV: Spé 2 sur JKR \nDV: basique sur chaque perso \nGat: switch TM avec Traya (spé 2) \nTraya isolation sur tank (GK) en sélectionnant DV \nWat : Spé 2 sur Traya (puis lorsqu’il rejouera spé 3 sur GAT) \nBSF : Peur (Spé 2) sur le jedi qui a le plus de TM \nPuis controler les adversaire en mettant ability block Tuer JKR puis 1 autre personne (Rey) lorsqu’il réutilise Massacre impitoyable. \n__Remod__: **?dvvsrey** \n__Vidéo__: https://youtu.be/hnWMDVXiWQw')
   }
});
 
    
client.on('message', (message) => {
   if (message.content === '?counter-drvsrey') {
   message.reply(
       '\n**Dark Revan vs Rey** \n__Compo__: DR lead Dbs Alpha Gat Wat \n__Compo adverses__: Rey + rez ou Rey heroes + tank (SANS MALAK)  \n__Stratégie__: \n1 si pas de tank: tec de wat sur dr Si tank tec wat sur dbs \n2 spe 2 de Dr sur rey \n3 spe 2 de dbs \n4 bouclier sur brute \n5 fracture rey \nBaisser la santé de rey jusquà son immu aux dégâts. Patienter, en maintenant la team adverse sous peur (spe 2 de Dr, spe2 de dbs). Rey fait son ulti. Attendre qu elle ne soit plus immu, puis focus rey et notamment refracture. \n__Remod__: **?drvsrey** \n__Vidéo__: https://www.youtube.com/watch?v=kA4zOOymB20')
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-jkrvsrey') {
   message.reply(
       '\n**Jedi Knight Revan vs Rey** \n__Compo__: JKR lead, GAS, Bastila , Hyoda, GAT ou JKL ( encore plus safe ) \n__Compo adverse__: Fonctionne bien sur tout type de compos classiques TW avec double héros, sauf la compo avec r2 qui camoufle rey. \n__Stratégie__: Le concept de la team est de tout envoyer sur REY, en la contrôlant grâce a GAT et en permettant son focus grâce a la marque de JKR, et ensuite de spammer le plus possible les attaques de GAS (avec les assists des différents persos) afin de diminuer les hp max de REY, de déclencher son immunité aux dégâts, puis de la tuer très rapidement une fois l immunité aux dégâts finie. tout cela en faisant encaisser GAS qui sert également de tank car les cibles ennemies le focus quasi exclusivement a cause du coding de lIA anti GAS. Savior est disponible en temps qu assurance risque si jamais votre GAS prend cher, mais si GAS meurt définitivement, c est quasiment foutu, d où l’intérêt de le rendre très tanky. \n__Remod__: **?jkr** \n__Vidéo__: https://www.youtube.com/watch?v=syO0ml-10oM')
   }
});
 
  
client.on('message', (message) => {
   if (message.content === '?counter-drvsjml') {
   message.reply(
       '\n**Dark Revan vs Jedi Master Luke** \n__Compo__: DR BSF Malak wat Han (si wat avec jml) sinon HK \n__Condition d’attaque__: \n-Pour jouer avant JKR, il faut que votre wat soit plus rapide que le wat adverse \n__Stratégie__: \n -Poser le blastech (Spé4) de wat sur DR \n-Puis medipac sur BSF \n-Ordre de kill : \n-si JML lead : Wat / JKR / JML / GAS / JKL \n-Si JKR lead : Wat / JKR / GAS / JKR (2° fois) / Puis JKL et JML \n-Ne pas attaquer GAS ou JKL s ils ont le buff qui leur donne 100% de contre attaque. \n-Bien contrôler JKR et GAS avec la peur. https://www.youtube.com/watch?v=E0H1QcsG9Ic&feature=youtu.be&ab_channel=BitDynasty')
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-jkrvspadme') {
   message.reply(
       '\n**Jedi Knight Revan vs Padme** \n__Compo__: JKR lead, bastila shan, Jolee, GMY ou JKA, Ermite Yoda \n__Condition d’attaque__: Vous devez être plus rapide quen face. Vérifiez le modage du jka adverse. Sil est modé en santé et haut en relique, veillez à avoir un yoda bien modé en attaque avec un niveau de relique suffisant. \n__Stratégie__: Marquez le JKA adverse. Effectuez les attaques à assist (Basti, ermite) en ciblant votre Yoda, vers le GK adverse, pour ne surtout pas monter la protection du JKA adverse. Revan file la jauge à yoda. Tuez JKA au plus vite. Ciblez Padme avec la même stratégie. Aucune assist sur la cible que lon veut tomber tant que Padme nest pas tombée. \n__Remod__: **?jkr** \n__Vidéo__: https://www.youtube.com/watch?v=rtyHtaz_mNw')
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-gasvsgas') {
   message.reply(
       '\n**Général Anakin Skywalker en miroir** \nGAS en miroir est clairement un combat facile mais qui finit probablement avec Fives en moins. Vous pouvez largement taper une team GAS full R7 avec une GAS R4 par exemple. Dès que Fives se sacrifie, le combat devient de plus en plus simple. \n__Remod__: **?gas** \n__Vidéo__: https://www.youtube.com/watch?v=p99OYBwBf1M&feature=youtu.be');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?counter-clsvscls') {
   message.reply(
       '\n**Commandant Luke Skywalker en miroir** \n__Conditions__: On prend un Han Solo moins rapide que le sien pour jouer en premier \n__Conseils__: Les persos avec Garde de Chewie ne peuvent pas être stun, donc si C3C est 3* g11, il aura la garde et donc ne pourra pas être stun. \n__Stratégie__: \n1. Stun Chewbacca \n2. Tuer Chewbacca \n3. Tuer C3C \n4. Tuer Han Solo \n5. Tuer CLS. \n__Remod__: **?c3c** \n__Vidéo__: https://youtu.be/_X_KNiHCZ1U');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?counter-jkrvsslkr') {
   message.reply(
       '\n**Jedi Knight Revan + Jedi Knight Luke vs SLKR** \n__Compo__: \nJKR JKL Bastila Shan Old Ben Ermit Yoda \n__Condition d’attaque__: \nEn multipliant les dégats par le % de DC, JKL doit approcher les 22k \n__Stratégie__: \n Jkr devrait mourir d’entrée et donc utiliser sa capacité sauveur, il faut ensuite suivre cette ordre \n- Spé 2 de jkr sur Hux pour l’empêcher de jouer \n- Spé 2 de HY pour la prévoyance \n- Spé 1 de BS sur JKL en ciblant kru \n- Spé 1 de OB pour baisser la tm \n- Spé 1 de Jkl sur HY pour augmenter la jauge de tour \n- Cibler et tuer le Red trooper avec la spé de Jkr en appelant jkl \n-Spé 1 de HY sur JKL en ciblant kru pour le tomber \n- L’AOE de slkr fera contre attaquer Jkl sur Hux, restera à tuer le dernier FO avec une basique de JKL \nLe reste du combat se concentrera sur Slkr en appelant au maximum jkl avec les spé de BS, HY et JKR. Toujours appeler BS avec la spé de Jkl pour poser le blocage de capacité, aussi, utiliser la raillerie de OB dès que possible. \n__Remod__: **?jkrvsslkr** \n__Vidéo__: https://www.youtube.com/watch?v=i3gf-teE3U0 https://youtu.be/z_TRXVWivIw')
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-zepvsjml') {
   message.reply(
       '\n**Zeta Palpatine vs JML Lead** \n__Stratégie__: Pensez aux ability block de la basique de Vador. Attention si les toons perdent leur protection ils bénéficient d un buff de ténacité et c est plus compliqué pour Vador \n__Vidéo__: https://www.youtube.com/watch?v=p99OYBwBf1M&feature=youtu.be');
   }
});
 client.on('message', (message) => {
   if (message.content === '?counter-clsvsnute') {
   message.reply(
       '\n**Commandant Luke Skywalker vs Nute** \n__Stratégie__: Stun Dooku pour qu’il ne contre-attaque plus. Il faudra juste contrôler la TM et les buffs de Droideka. Attention, si Enfys Nest en face, éviter de mettre C3PO dans votre team CLS. \n__Remod__: **?c3c** \n__Vidéo__: https://www.youtube.com/watch?v=1K9caS5qnRA&feature=youtu.be');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?counter-padmevspadme') {
   message.reply(
       '\n**Padme en miroir** \n__Stratégie__: Votre Padme doit être plus rapide qu’en face, poser la confusion de 3po sur Kenobi pour éviter qu’il taunt, puis se concentrer sur Anakin puis Padme. Le plus dur est fait. \n__Remod__: **?padme** \n__Vidéo__: https://www.youtube.com/watch?v=Dak98k51jqE');
   }
});
 
 client.on('message', (message) => {
   if (message.content === '?counter-drvsdr') {
   message.reply(
       '\n**Dark Revan en miroir** \n__Stratégie__: Votre Revan et Bastila Déchue doivent être plus rapides qu’en face. Si possible, tuer Bastila Déchue en premier \n__Remod__: **?dr** \n__Vidéo__: https://www.youtube.com/watch?v=ZMGD5sm9-Vs&feature=youtu.be');
   }
});
 client.on('message', (message) => {
   if (message.content === '?counter-padmevsns') {
   message.reply(
       '\n**Padme vs Soeur de la nuit** \n__Stratégie__: Focus Daka en premier pour qu’elle ne revive pas le reste des ns. \n__Remod__: **?padme** \n__Vidéo__: https://www.youtube.com/watch?v=NPBMReMlEgl');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-gatvssee') {
   message.reply(
       '\n**Grand Admiral Thrawn vs SEE** \n__Stratégie__: Si pas de DR ou Vador plus rapide que DR avec les bonus, mettre Vador en lead  \n__Vidéo__: https://www.youtube.com/watch?v=HEcihpdQcbI');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-clsvspadme') {
   message.reply(
       '\n**Commandant Luke Skywalker vs Padme** \n__Vidéo__: https://youtu.be/A54JJA18W4k');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-jmlvsrey') {
   message.reply(
       '\n**Jedi Master Luke vs Rey** \n__Compo__: JML Jolee Gas ST JKA \nToujours veiller à ce que Jml ai la raillerie. \Pour cela, il est obligé d’avoir de la protection. \nIl perd sa raillerie quand il n’a plus de protection. \nIl faut donc : \n- Spé 2 de shaak ti sur celui qui a besoin de protection \n- Spé 2 de Jolee sur celui qui a besoin de protection \n__Strategie :__ Basique de ST pour sortir de la raillerie si un tank, puis Spé 1 de GAS sur Rey pour poser le perce armure. Faire un max de spé du lead pour charger l’ultime, la spé lead doit être faite sur un perso qui l’a faite et qui n’a pas encore repris son tour. \n- Focus Rey dès que possible ou le gros dps ennemie \n- Bien gérer la protection de ses toons (surtout jml) \n- Avoir le Max de santé et protection sur tous les toons au moment de subir l’ultime de Rey \n__Vidéo__: https://youtu.be/_OoN9fxYIb0');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?counter-jkrvspadme') {
   message.reply(
       '\n**Jedi Knight Revan vs Padme** \n__Compo:__ Jedi Knight Revan Jedi Knight Luke Old Ben Bastila Shan Hermit Yoda \n__Stratégie :__ focus Jka adverse avec la spé 2 de jkr éviter au maximum les assist. \nFocus padme avec la même stratégie /nLe plus dur est fait. \n__Vidéo__: https://youtu.be/129HwLY_iVs');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-malvovsnego') {
   message.reply(
       '\n**Malveillant R7 vs Négociateur R8** \n__Vidéo__: https://youtu.be/50y1Yd5lPoU');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?counter-finalizervsaa') {
       message.reply(
       '\nVidéo: https://youtu.be/akFcOIurTrE');
   }
});
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-rey') {
       message.reply(
       '\nStats à atteindre **Team Rey** \n__Rey__: \nSanté: 200k \nVitesse: 530 \n__Héros Poe__ \nSanté: 65k \nVitesse: 320 \n__Héros Finn__ \nSanté: 60k \nVitesse: 320 \n__Amilyn Holdo__ \nSanté: 85k \nVitesse: 220 \n__Finn__ \nSanté: 100k \nVitesse: 230 \n__Vidéo__: https://www.youtube.com/watch?v=iMHVdykwL7Q \nhttps://youtu.be/hG0Iv8jzVLc');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-c3c') {
       message.reply(
       '\nStats à atteindre **Team Rebelle, CLS et C3C en TB** \n__Commandant Luke Skywalker__ \nVitesse: 290 \nDégâts: 7000 \n__Han Solo__ \nVitesse: 280 \nDégâts: 7000 \n__Chewbacca__ \nVitesse: 285 \nDégâts: 8500\n__C3PO__ \nVitesse: 295 \nPouvoir: 100% \n__3PO et Chewie__ \nVitesse: 320 \nDégâts: 6500 \nPouvoir: 90% \n__Vidéo__: https://www.youtube.com/watch?v=yLJTmdfxt1Q \nhttps://www.youtube.com/watch?v=owQOe51Z_GU');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-padme') {
       message.reply(
       '\nStats à atteindre **Team Padme en TB** \n__Padme__ \nSanté: 80k \nVitesse: 340 \n__Général Kenobi__ \nSanté: 90k \nVitesse: 270 \n__Ahsoka Tano__ \nSanté: 50k \nVitesse: 260 \nDégâts: 6000\n__C3PO__ \nSanté: 70k \nVitesse: 300 \nPouvoir: 120% \n__Jedi Knight Anakin__ \nSanté: 65k \nVitesse: 300 \nDégâts: 7000 \n__Vidéo__: https://www.youtube.com/watch?v=ECNG-H25tEc');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-jkr') {
       message.reply(
       '\nStats à atteindre **Team Jedi Knight Revan en TB** \n__Jedi Knight Revan__ \nVitesse: 320 \n__Bastila Shan__ \nVitesse: 290 \nPouvoir: 50% \n__Jolee Bindo__ \nSanté: 100k \nVitesse: 250 \n__Grand Maître Yoda__ \nVitesse: 300 \nDégâts: 6000 \n__Général Anakin Skywalker__ \nVitesse: 260 \nDégâts: 9000 \n__Vidéo__: https://www.youtube.com/watch?v=aTqcGtRqqb8&t=579s');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-jkl') {
       message.reply(
       '\nStats à atteindre **Team Jedi Knight Luke en TB** \n__Jedi Knight Luke__ \nVitesse: -160 \nDégâts: 10000\n__Vieux Ben__ \nVitesse: 250 \nPouvoir: 75% \nSanté + Protection: 110k\n__Ahsoka Tano__ \nSanté: 50k \nVitesse: 260 \nDégâts: 6000\n__Ermit Yoda__ \nVitesse: 340 \n__Jedi Knight Anakin__ \nSanté: 65k \nVitesse: 300 \nDégâts: 7000 \n__Vidéo__: https://www.youtube.com/watch?v=l0Yf7IPC7mQ \nhttps://youtu.be/o0YXYJ5ZBBc');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-st') {
       message.reply(
       '\nStats à atteindre **Team Shaak Ti et 501 en TB** \n__Shaak TI__ \nSanté: 80k \nVitesse: 330 \n__Echo__ \nVitesse: 210 \nDégâts: 9000 \nPouvoir: 70% \n__Rex__ \nVitesse: 315 \n__Fives__ \nSanté: 100k \nVitesse: 210 \n__ARC Trooper__ \nSanté: 90k \nVitesse: 280 \nDégâts: 9500 \n__Vidéo__: https://www.youtube.com/watch?v=FAZIJLEBlT0');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-jml') {
       message.reply(
       '\nStats à atteindre **Team Jedi Master Luke en TB** __Jedi Master Luke__ \nSanté: 100k \nVitesse: 540 \nPouvoir: 100% \n__Bastila Shan__ \nVitesse: 290 \nPouvoir: 50% \n__Jolee Bindo__ \nSanté: 100k \nVitesse: 250 \n__Grand Maître Yoda__ \nVitesse: 300 \nDégâts: 6000 \n__Général Anakin Skywalker__ \nVitesse: 260 \nDégâts: 9000 \n__Vidéo__:https://youtu.be/4EMd76ffvbk');
   }
});
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-jtr') {
       message.reply(
       '\n__Stats à atteindre **Jedi Training Rey en TB__: \n__JTR__: \nVitesse: 300 \nChance de Critiques: 60% \nPouvoir: 60% \n__R2D2__: \nVitesse: 300 \nChance de Critique spé : 60% \n__BB8__:\nVitesse: 320 \n__C3PO__ :\nVitesse : 270 \nPouvoir: 100% \n__Finn__ : \nVitesse : 280 \nChance de critique : 60% \n__Strat__: \nAvec le lead JTR, à chaque fois que l on inflige une expose, la jauge de tour des alliés de la résistance augmente de 10%. De plus, à chaque fois que l on fait une capacité spéciale, la jauge de tour des ennemis exposés est réduite de 5% (cumulatif). Ainsi, il est possible d’enchaîner en boucle sans laisser les adversaires jouer un tour si on se débrouille bien. L idéal dans l enchaînement des vagues, est de pouvoir commencer la vague avec "avenir lucide" de BB8, afin d avoir toute la team a 100% TM; pour cela, il faut essayer de finir la vague précédente avec un maximum de tm sur BB8. En ce qui concerne les droïdes a bataillons, leur particularité est de dispell tous leurs debuffs lorsqu ils prennent des dégâts. Avec JTR, il est possible de contrôler un droïde a bataillon sans lui infliger de dégâts (avec Mindtrick). C est très utile lorsqu il y a deux B2 en face notamment (Mindtrick sur un, focus sur l’autre). Pensez à viser les ennemis qui font le plus de dégâts avec les capacités qui ne font pas de dégâts pour leur mettre un débuff d attaque au cas où ils viendraient à jouer. \n__Vidéo__: https://youtu.be/3Tqa38_1Ur0');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-gasat') {
       message.reply(
       '\nStats à atteindre **Mission Général Anakin Skywalker et Ahsoka Tano en TB** \n__Général Anakin Skywalker__ \nSanté: 100k \nVitesse: 285 \nDégâts: 7000 \nPouvoir: 90% \n__Ahsoka Tano__ \nAucun mod \n__Vidéo__: https://www.youtube.com/watch?v=vVbgN0fxvXE');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-jedirep') {
       message.reply(
       '\nStats à atteindre **Jedi de la République** \n__Général Skywalker__ \nSanté: 85k \nVitesse: 300 \nPouvoir: 120% \n__Grand Maitre Yoda__ \nVitesse: 340 \n__Ahsoka Tano__ \nVitesse: 260 \nDégâts: 8000\n__Général Kenobi__ \nSanté: 110 000\nVitesse: 240\n__Barriss Offee__ \nSanté: 90 000 \nVitesse: 250 \n__Vidéo__:https://youtu.be/hnskpiPppIQ');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ls-ships') {
 
       $
       message.reply(
       '\n__Remod__: \nTous les vaisseaux doivent avoir des modules 6E à minima, pas besoin de synergie simplement les modules les plus rares. \n__Compo__: \nArc de Rex, Y-Wing, Eta-2 d’Anakin. Subs: Plo Koon, Ahsoka, Five et Sergent Clone. \n__Stratégie__: \nN’utiliser la spé de rex que si un ship à besoin de protection. Spé 1 du vaisseau amiral sur Anakin pour le bonus d’attaque puis 1er renfort: Plo Koon, spé 1 pour augmenter la TM. Utiliser dès que possible la spé Formation d’assaut du vaisseau amiral pour faire un maximum de dégâts. Le plus dur est fait, le deuxième renfort dépendra de ce qu’il restera en face: Ahsoka si il reste un vaisseau avec des bonus, Five si la spé 2 du vaisseau amiral est dispo. \n__Vidéo des 3 compos possibles__: \nhttps://youtu.be/sIqRrrKGhoA \n https://www.youtube.com/watch?v=q8QjYsC4c64 \n https://www.youtube.com/watch?v=YXzxlvZo36Y');
   }
});
 
 
client.on('message', (message) => {
   if (message.content === '?tb-ds-it') {
       message.reply(
       '\nStats à atteindre **Soldat de Empire en TB** \n__Général Veers__ \nVitesse: 275 \nDégâts: 5000 \n__Amiral Piett__ \nVitesse: 340 \n__Colonel Starck__ \nVitesse: 300 \nDégâts: 5000\n__Range Trooper__ \n__Death Trooper__ \nPouvoir: 110% \n__Vidéo__: https://www.youtube.com/watch?v=0pd7zOTF3ik');
   }
});
client.on('message', (message) => {
   if (message.content === '?tb-ds-msp1') {
       message.reply(
       '\nStats à atteindre **Mission Spéciale en Phase 1 de TB DS**\n__Nute__ : \nVitesse : 290 \n__Wat__ : \nVitesse: 300 \nHPP : 100k\n__B1__ : \nVitesse 300 \n__B2__ : \nProtection : 75k\nPouvoir: 100% \nTénacité : 100% \nCA : 35%\n__Droideka__ : \nVitesse : 210 \n__Strat__ : BlasTech sur B1, il doit jouer vite et fort, Bouclier Baktoid sur B2, c’est le tank, Chiewab sur Droideka. \n__Vidéo__ : https://www.youtube.com/watch?v=EoOlI-Ynnws');
}
});
 
client.on('message', (message) => {
  if (message.content === '?tb-ds-msp2') {
      message.reply(
      '\nStats à atteindre **Mission Spéciale en Phase 2 de TB DS**\n__Alpha__ : \nVitesse : 320 \n__Espion__ : \nDC: 228% \nDégâts en G12 : 3800 \n__Sun Fac__ : \nVitesse 210 \nHPP : 110k \n__Poggle__ : \nVitesse : 240 \nPouvoir : 70% \n__Soldat__ : \nProtection ; 40k \nVitesse : 230 \n__Strat__ : Retirer l enrage sur l Acklay dès que possible avec la spé de l’event sur Alpha. Cibler ensuite les jedi faisant des dégâts de zone pour bloquer leur capacité (Celui à double sabre, le poulpe, Kit Fisto) Viser l’acklay tant que possible. \n__Vidéo__ : https://www.youtube.com/watch?v=kpaMvAo-J7c&t=184s');
}
});
 
 
 
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === 'Fr.pf3') {
       message.reply(
       '\n**- Pas de GL** : \n> FARM des COUNTER GL (**prio REY**) \n> FARM 1ère GL **en PARALLELE** du PDF 2 (soumis à concertation avec off) \n> FARM JKL possible en parallèle de la première GL\n**- 1 GL possédée** :\n> FARM de JKL et d’un 2ème GL\n> Barriss G12 et son Zeta \n> CHEWPIO 7* G12 + Zeta \n> GEAR de la TEAM CLS G13 pour association Chewpio \n> Montée en étoiles des Imperial Troopers 7*\n**- 1 GL + JKL possédés** : \n> Farm de la deuxième GL (concertation off)\n> Barriss G12 et son Zeta \n> CHEWPIO 7* G12 + Zeta \n> GEAR de la TEAM CLS R4 \n> Mon Mothma 7* G12 + Zeta\n**- 2 GL + JKL possédés** : \n> Imperial Troopers G12 7* \n> FARM 3ème GL \n> Farm des teams précédentes si pas déjà fait');
   }
});
 
 
 
 
 
 
 
client.on('message', (message) => {
   if (message.content === '?help') {
       message.reply(
       '\n__Plan de Farm 3__: **Fr.pf3**\n \n__Voici les commandes des stats__:\n**?gasvsslkr** : Counter Slkr avec GAS \n**?jkrvsslkr** : Counter Slkr avec JKR et JKL \n**?dvvsrey** : Counter Rey avec Dark Vador \n**?drvsrey** : Counter Rey avec Dark Revan \n**?gas** : Team Général Anakin Skywalker \n**?padmy** : Team Padme + Gmy \n**?jkr** : Team Jedi Knight Revan \n**?c3c** : Team Rebelle, CLS et C3C \n**?mm** : Team Mon Mothma \n**?dr** : Team Dark Revan \n**?gg** : Team Général Grievous \n**?geo** : Team Géonosiens \n**?nute** : Team Nute \n**?ns** : Team Soeur de la Nuit \n**?trium** : Team Trium \n \n__Voici les différents counter du bot__: \n**?counter-gasvsslkr** \n**?counter-jkrvsslkr** \n**?counter-gatvssee** \n**?counter-dvvsrey** \n**?counter-drvsrey** \n**?counter-jkrvsrey** \n**?counter-drvsjml** \n**?counter-zepvsjml** \n**?counter-clsvsnute** \n**?counter-padmevspadme** \n**?counter-drvsdr** \n**?counter-padmevsns** \n**?counter-jkrvspadme** \n**?counter-padmyvsgg** \n**?counter-nsvsgg** \n**?counter-jkrvsgg** \n**?counter-gasvsgas** \n**?counter-clsvscls** \n**?counter-clsvspadme** \n**?counter-jmlvsrey** \n**?counter-malvovsnego** \n**?counter-finalizervsaa** \n \n__Voici les commandes des stats en TB__: \n**?tb-ls-rey** : Team Rey Légendes en TB \n**?tb-ls-padme** : Team Padmé en TB \n**?tb-ls-jkr** : Team Jedi Knight Revan en TB \n**?tb-ls-jkl** : Team Jedi Knight Luke en TB \n**?tb-ls-st** : Team Shaak Ti et 501ème en TB \n**?tb-ls-jml** : Team Jedi Master Luke en TB \n**?tb-ls-jtr** : Team Jedi Training Rey en TB \n**?tb-ls-c3c** : Team Rebelle en TB \n**?tb-ls-gasat** : Mission avec GAS et AT \n**?tb-ls-jedirep** : Combat Jedi Rep en TB LS\n**?tb-ls-ships** : Combat vaisseaux en TB LS \n**?tb-ds-it** : Team Imperial Troopers en TB \n**?tb-ds-msp1** : Mission Spéciale P1 en TB DS \n**?tb-ds-msp2** : Mission Spéciale P2 en TB DS');
   }
});
 
 
 
 
 
 
 
 
 
client.login('ODA0MDQxMDQwMDI5OTQxNzYw.YBGjkg.bgIv1fUNoVPCeQ9iw2dfe72cWrY');

