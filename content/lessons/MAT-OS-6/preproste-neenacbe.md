---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Enačbe že znaš reševati: pri $x + 3 = 8$ iščeš število, ki ustreza enakosti, in dobiš $x = 5$. V življenju pa pogosto ne iščemo točno določenega števila, ampak **vsa števila, ki ustrezajo pogoju**. Na primer: »V dvigalo gre lahko največ 6 oseb«, »Za igralnico moraš imeti vsaj 10 let«, »V denarnici imam 20 evrov, zvezek stane 3 evre, koliko zvezkov lahko kupim?«

Takšne pogoje zapišemo z **neenačbami**. Rešitev ni eno število, ampak lahko jih je več. Danes se bomo naučili neenačbe reševati in rešitve poiskati v množici naravnih števil $\mathbb{N} = \{1, 2, 3, 4, \dots\}$.

## Razlaga

**1. Znaki za primerjanje.** Poznaš že znaka $<$ in $>$. Dodamo še dva:

| Znak | Beremo |
|---|---|
| $<$ | je manjše od |
| $>$ | je večje od |
| $\le$ | je manjše ali enako |
| $\ge$ | je večje ali enako |

Primer: $5 \le 5$ drži (je enako), $5 < 5$ pa ne drži.

**2. Kaj je neenačba.** Neenačba je zapis, v katerem sta dva izraza povezana z enim od teh znakov, npr. $x + 2 < 7$. Črka $x$ je **neznanka**.

**3. Rešitev neenačbe.** Rešitev je vsako število, ki ga vstavimo namesto $x$ in neenačba postane resnična. Pri $x + 2 < 7$:

- $x = 3$: $3 + 2 = 5 < 7$ drži, torej je $3$ rešitev.
- $x = 5$: $5 + 2 = 7 < 7$ ne drži, torej $5$ ni rešitev.

**4. Množica rešitev.** Zbrane vse rešitve zapišemo v množico. Če iščemo v naravnih številih, pridejo v poštev samo $1, 2, 3, \dots$

**5. Kako rešujemo.** Podobno kot enačbe: neznanko osamimo z nasprotno računsko operacijo. Pri tem na obeh straneh naredimo isto:

- Če na obeh straneh odštejemo (ali prištejemo) isto število, znak ostane enak.
- Če obe strani delimo (ali množimo) z istim naravnim številom, znak ostane enak.

Primer: $x + 3 < 8$. Odštejemo $3$: $x < 5$.

**6. Končno ali neskončno rešitev.** Pri znakih $<$ in $\le$ je naravnih rešitev končno mnogo (števila do neke meje). Pri znakih $>$ in $\ge$ jih je neskončno mnogo (števila od neke meje naprej).

## Rešeni primeri

### Primer 1 (lažji): $x + 3 < 8$

Poišči rešitve v množici naravnih števil.

1. Neznanko osamimo: na obeh straneh odštejemo $3$ (nasprotna operacija seštevanju). Znak ostane: $x < 8 - 3$, torej $x < 5$.
2. Iščemo naravna števila, ki so manjša od $5$: $1, 2, 3, 4$. Število $5$ ni rešitev, ker je znak $<$ in ne $\le$.
3. **Preverimo** največjo rešitev: $4 + 3 = 7 < 8$ drži. Prvo število, ki ni rešitev: $5 + 3 = 8 < 8$ ne drži.
4. **Rešitev:** $\{1, 2, 3, 4\}$.

### Primer 2: $x - 4 \ge 3$

1. Na obeh straneh prištejemo $4$ (nasprotna operacija odštevanju): $x \ge 3 + 4$, torej $x \ge 7$.
2. Iščemo naravna števila, ki so večja ali enaka $7$. Znak je $\ge$, zato je tudi $7$ rešitev.
3. **Preverimo:** $7 - 4 = 3 \ge 3$ drži. Za $6$: $6 - 4 = 2 \ge 3$ ne drži.
4. **Rešitev:** $\{7, 8, 9, 10, \dots\}$. Rešitev je neskončno mnogo, zato jih ne moremo vseh naštiti in zapišemo začetek ter pike.

### Primer 3 (težji): besedilna naloga

Ana ima $20\,\text{€}$. Zvezek stane $3\,\text{€}$. Koliko zvezkov lahko kupi (vsaj enega)?

1. **Neznanka:** $x$ je število zvezkov.
2. **Zapis pogoja:** $x$ zvezkov stane $3 \cdot x$ evrov. To ne sme biti več od $20$, zato $3 \cdot x \le 20$.
3. **Reševanje:** obe strani delimo s $3$: $x \le 20 : 3$. Ker $20 : 3$ ni naravno število, poiščemo večkratnike števila $3$ blizu $20$: $3 \cdot 6 = 18 \le 20$, $3 \cdot 7 = 21 > 20$. Torej $x \le 6$.
4. **Preverimo:** $6$ zvezkov stane $18\,\text{€}$, kar je manj od $20\,\text{€}$. $7$ zvezkov stane $21\,\text{€}$, kar je več kot ima Ana.
5. **Rešitev:** $\{1, 2, 3, 4, 5, 6\}$. Ana lahko kupi največ $6$ zvezkov.

## Pogoste napake

- **Zamenjava $<$ in $\le$.** Pri $x < 5$ število $5$ ni rešitev, pri $x \le 5$ pa je. Vedno preveri mejo z vstavljanjem.
- **Napačna nasprotna operacija.** Pri $x + 3 < 8$ je treba $3$ odšteti, ne prišteti.
- **Pozabljena naravna števila.** Če iščemo v $\mathbb{N}$, ne zapisuj $0$ ali ulomkov, npr. $2{,}5$.
- **Neskončne rešitve zapisane do konca.** Pri $x \ge 7$ ni zadnje rešitve. Piši $7, 8, 9, \dots$
- **Zaokroževanje pri deljenju.** Pri $3x \le 20$ ni pravilno vzeti $7$ zato, ker je $20 : 3$ približno $6{,}67$. Preveri z množenjem.

## Povzetek

- Neenačba povezuje izraza z znakom $<$, $>$, $\le$ ali $\ge$.
- Rešitev je vsako število, ki neenačbo spremeni v resničen zapis.
- Neznanko osamimo z nasprotno računsko operacijo na obeh straneh; znak ostane.
- Pri znakih $<$ in $\le$ je naravnih rešitev končno mnogo, pri $>$ in $\ge$ neskončno mnogo.
- Rešitev vedno preveri z vstavitvijo (še posebej mejno število).

## Drugače: Na sliki

Naravna števila si predstavljaj kot točke na številski premici: $1, 2, 3, 4, 5, 6, 7, \dots$

Za $x < 5$ pobarvaš vse točke levo od $5$: $1, 2, 3, 4$. Točka $5$ ostane prazna (odprta), ker $5$ ni rešitev.

Za $x \le 5$ pobarvaš še točko $5$ (zapolnjena), torej $1, 2, 3, 4, 5$.

Za $x \ge 7$ pobarvaš točko $7$ in vse desno od nje: $7, 8, 9, \dots$ Puščica na desno pove, da se rešitve nadaljujejo.

Znak $<$ kaže »na manjše«, zato iščemo levo od meje. Znak $>$ kaže »na večje«, zato iščemo desno.

## Drugače: Iz vsakdanjega življenja

**Dvigalo.** Na dvigalu piše: »Največ $6$ oseb.« To pomeni $x \le 6$. Če je v dvigalu $6$ oseb, je še vredu, pri $7$ pa ne. Naravne rešitve so $1, 2, 3, 4, 5, 6$.

**Vstopnica.** »Za ogled filma moraš imeti vsaj $12$ let.« To pomeni starost $\ge 12$. Rešitve so $12, 13, 14, \dots$ Tudi natanko $12$ let je dovolj.

**Primerjaj besede:** »največ« pomeni $\le$, »vsaj« pomeni $\ge$, »manj kot« pomeni $<$, »več kot« pomeni $>$. Pozorno beri, katera beseda je v nalogi.

## Drugače: Korak za korakom s številkami

Rešimo $x + 6 \le 10$ in rezultat preverimo s tabelo.

1. Odštejemo $6$ na obeh straneh: $x \le 4$.
2. Naravna števila do $4$: $1, 2, 3, 4$.
3. Preizkus v tabeli (tudi z vrednostmi zunaj rešitev):

| $x$ | $x + 6$ | Ali je $x + 6 \le 10$? |
|---|---|---|
| $1$ | $7$ | da |
| $3$ | $9$ | da |
| $4$ | $10$ | da (je enako) |
| $5$ | $11$ | ne |
| $8$ | $14$ | ne |

Tabela potrdi: rešitve so $\{1, 2, 3, 4\}$. Preizkus vedno naredi pri meji: pri $4$ še velja, pri $5$ ne več.

## Drugače: Bolj natančno

Množico rešitev neenačbe v $\mathbb{N}$ zapišemo takole:

$$\{x \in \mathbb{N} \mid x + 3 < 8\} = \{1, 2, 3, 4\}$$

Beremo: »množica vseh naravnih števil $x$, za katera velja $x + 3 < 8$«.

Zakaj smemo na obeh straneh odšteti isto število? Če je $a < b$, to pomeni, da je $a$ na številski premici levo od $b$. Če oba zamaknemo za isto razdaljo, ostaneta v istem vrstnem redu. Zato iz $x + 3 < 8$ sledi $x + 3 - 3 < 8 - 3$, torej $x < 5$. Isto velja za seštevanje. Pri množenju in deljenju z naravnim številom se razdalje med števili povečajo ali zmanjšajo v isti meri, zato je vrstni red spet enak. Zato lahko neenačbo rešujemo korak za korakom in vsak korak da neenačbo z enako množico rešitev.

## Preveri se

? Katera množica je rešitev neenačbe $x + 2 < 6$ v množici naravnih števil?
- $\{1, 2, 3, 4\}$
+ $\{1, 2, 3\}$
- $\{5, 6, 7, \dots\}$
- $\{1, 2, 3, 4, 5\}$
> Odštejemo $2$: $x < 4$. Naravna števila, manjša od $4$, so $1, 2, 3$. Število $4$ ni rešitev, ker je $4 + 2 = 6$ in $6 < 6$ ne drži.

? Katero je najmanjše naravno število, ki je rešitev neenačbe $x - 2 \ge 3$?
- $3$
- $6$
+ $5$
> Prištejemo $2$: $x \ge 5$. Znak $\ge$ vključuje mejo, zato je najmanjša rešitev $5$. Preverimo: $5 - 2 = 3 \ge 3$ drži.

? Katera množica je rešitev neenačbe $2 \cdot x < 9$ v množici naravnih števil?
- $\{1, 2, 3\}$
- $\{1, 2, 3, 4, 5\}$
+ $\{1, 2, 3, 4\}$
> Iščemo števila, za katera je $2x$ manjše od $9$. Za $x = 4$ je $2 \cdot 4 = 8 < 9$, za $x = 5$ pa je $10 > 9$. Rešitve so $1, 2, 3, 4$.
