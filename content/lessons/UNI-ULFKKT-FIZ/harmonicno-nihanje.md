---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Glasbene vilice udari rahlo, nato močno. Drugi ton je glasnejši, a natanko enako visok: kraki tudi pri večjem odmiku naredijo $440$ nihajev v sekundi. Na prvi pogled je to narobe, saj morajo pri večjem odmiku prepotovati daljšo pot. Uganko razreši **harmonična** sila: dlje kot je krak izmaknjen, močneje ga vleče nazaj, zato je tudi hitrejši in se vrne v istem času.

Isti model opiše strune glasbil, membrano zvočnika, atome, ki nihajo vzdolž vezi (infrardeči spektri), potresno varnost stavb in blažilnike v avtomobilu. Ko nihanje **dušimo**, ton vilic počasi utihne, in tudi to zna model izračunati.

## Razlaga

Začni pri enem samem nihalu: utež na vzmeti potegneš navzdol in spustiš. Vzmet jo vleče nazaj, utež prešine ravnovesno lego, se ustavi na drugi strani in se vrne. Ta primer najprej razstavimo na pojme, enačbo in rešitev, potem pa ga posplošimo na nihalo na vrvici, energijo in dušenje.

### Utež na vzmeti, korak za korakom

**1. Osnovni pojmi.** Nihalo se giblje okoli **ravnovesne lege**, kjer je vsota sil nanj enaka nič. Odmik od ravnovesne lege označimo z $x$. Največji odmik je **amplituda** $x_0$. **Nihajni čas** $t_0$ (v mnogih učbenikih $T$) je čas enega celega nihaja, **frekvenca** $\nu = 1/t_0$ (enota $\mathrm{Hz} = \mathrm{s^{-1}}$), **krožna frekvenca** pa $\omega = 2\pi\nu = 2\pi/t_0$.

**2. Harmonična sila in enačba nihanja.** Nihanje je harmonično, kadar je sila, ki vleče telo nazaj proti ravnovesni legi, sorazmerna z odmikom:

$$F = -kx.$$

Po drugem Newtonovem zakonu je $m\ddot{x} = -kx$ oziroma

$$\ddot{x} + \omega_0^2 x = 0, \qquad \omega_0 = \sqrt{\frac{k}{m}}.$$

To je linearna diferencialna enačba drugega reda. Njena splošna rešitev je

$$x(t) = x_0\cos(\omega_0 t + \delta),$$

kjer sta amplituda $x_0$ in **fazni zamik** $\delta$ določena z začetno lego in začetno hitrostjo. Z vstavljanjem preveriš, da rešitev ustreza enačbi: $\ddot{x} = -\omega_0^2 x$.

**3. Hitrost in pospešek.** Z odvajanjem dobimo

$$v = \dot{x} = -\omega_0 x_0\sin(\omega_0 t + \delta), \qquad a = \ddot{x} = -\omega_0^2 x_0\cos(\omega_0 t + \delta) = -\omega_0^2 x.$$

Največja hitrost $v_{\max} = \omega_0 x_0$ je v ravnovesni legi, največji pospešek $a_{\max} = \omega_0^2 x_0$ pa v skrajnih legah, kjer je hitrost nič. Nihajni čas $t_0 = 2\pi/\omega_0$ ni odvisen od amplitude; to je značilnost harmoničnega nihanja.

:::premisli
Krak glasbenih vilic udariš močneje, da se amplituda podvoji. Kaj se zgodi z največjo hitrostjo kraka in kaj z višino tona?
---
Največja hitrost $v_{\max} = \omega_0 x_0$ se podvoji, nihajni čas $t_0 = 2\pi/\omega_0$ pa se ne spremeni, ker $\omega_0$ ni odvisna od $x_0$. Ton je glasnejši, a enako visok.
:::

### Od vzmeti do nihala na vrvici

**4. Nihalo na vijačni vzmeti.** Vzmet s koeficientom $k$ (enota $\mathrm{N/m}$) in utež z maso $m$:

$$t_0 = 2\pi\sqrt{\frac{m}{k}}.$$

Pri navpični vzmeti teža le premakne ravnovesno lego za $mg/k$ navzdol; okoli nove ravnovesne lege utež niha z istim nihajnim časom. Masa vzmeti je v tem modelu zanemarjena.

Če utež obesimo na dve vzmeti, je pomembno, kako sta vezani. Pri **vzporedni** vezavi (vzmeti druga ob drugi) se raztezka ujemata, sili pa seštejeta, zato je $k = k_1 + k_2$ in nihalo niha hitreje. Pri **zaporedni** vezavi (vzmet pod vzmetjo) obe nosita isto silo, raztezka pa se seštejeta, zato je $1/k = 1/k_1 + 1/k_2$ in nihalo niha počasneje. Dve enaki vzmeti zaporedno imata polovični koeficient, vzporedno pa dvakratnega.

**5. Matematično nihalo.** Točkasta utež na lahki neraztegljivi vrvici dolžine $l$. Če je odklon $\varphi$, je tangentna komponenta teže $-mg\sin\varphi$, lok pa $s = l\varphi$. Enačba gibanja je

$$ml\ddot{\varphi} = -mg\sin\varphi.$$

Pri **majhnih odklonih** ($\varphi \lesssim 10^\circ$) je $\sin\varphi \approx \varphi$ (v radianih) in dobimo harmonično nihanje z

$$\omega_0 = \sqrt{\frac{g}{l}}, \qquad t_0 = 2\pi\sqrt{\frac{l}{g}}.$$

Nihajni čas ni odvisen od mase uteži. Pri večjih odklonih je nihanje še vedno periodično, ni pa več točno harmonično in nihajni čas z amplitudo počasi narašča.

:::premisli
Pri vzmeti težja utež niha počasneje. Zakaj se pri matematičnem nihalu masa uteži pokrajša?
---
Sila, ki vrača utež, je del teže $mg\sin\varphi$ in je sorazmerna z maso, sorazmerna z maso pa je tudi vztrajnost $m$ na levi strani enačbe. Pri vzmeti sila $kx$ od mase ni odvisna, zato tam masa ostane v $t_0$.
:::

### Energija, dušenje in resonanca

**6. Energija nihanja.** Pri nihalu na vzmeti se kinetična energija $\tfrac{1}{2}mv^2$ in prožnostna energija $\tfrac{1}{2}kx^2$ izmenjujeta, njuna vsota pa je stalna:

$$W = \tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kx_0^2 = \tfrac{1}{2}mv_{\max}^2.$$

Energija je sorazmerna s **kvadratom amplitude**. Iz ohranitve energije lahko izračunamo hitrost pri poljubnem odmiku: $v = \omega_0\sqrt{x_0^2 - x^2}$.

**7. Dušeno nihanje.** V resnici nihanje zaradi trenja in upora počasi zamre. Pri majhnih hitrostih je sila upora sorazmerna s hitrostjo, $F_u = -bv$. Enačba gibanja je

$$m\ddot{x} + b\dot{x} + kx = 0 \quad\Longleftrightarrow\quad \ddot{x} + 2\beta\dot{x} + \omega_0^2 x = 0, \qquad \beta = \frac{b}{2m}.$$

Glede na velikost **koeficienta dušenja** $\beta$ ločimo tri primere:

- **šibko dušenje** ($\beta < \omega_0$): $x(t) = x_0\,e^{-\beta t}\cos(\omega t + \delta)$ z $\omega = \sqrt{\omega_0^2 - \beta^2}$; amplituda eksponentno pojema, energija pa kot $e^{-2\beta t}$;
- **kritično dušenje** ($\beta = \omega_0$): telo se najhitreje vrne v ravnovesno lego brez nihanja;
- **nadkritično dušenje** ($\beta > \omega_0$): telo se počasi, brez nihanja, plazi v ravnovesno lego.

Pri šibkem dušenju se amplituda v času $t_{1/2} = \ln 2/\beta$ razpolovi. Ker je navadno $\beta \ll \omega_0$, se krožna frekvenca zaradi dušenja skoraj ne spremeni.

**8. Vsiljeno nihanje in resonanca (na kratko).** Če na dušen oscilator deluje periodična sila s krožno frekvenco $\omega_v$, po prehodnem času niha s frekvenco sile. Amplituda je največja, ko je $\omega_v$ blizu $\omega_0$ (**resonanca**), in tem večja, čim šibkejše je dušenje.

## Rešeni primeri

### Primer 1 (lažji)

Utež z maso $0{,}25\,\mathrm{kg}$ visi na vijačni vzmeti s koeficientom $40\,\mathrm{N/m}$. Utež izmaknemo za $4{,}0\,\mathrm{cm}$ iz ravnovesne lege in spustimo. Kolikšni so nihajni čas, frekvenca, največja hitrost in največji pospešek?

**Podatki:** $m = 0{,}25\,\mathrm{kg}$, $k = 40\,\mathrm{N/m}$, $x_0 = 4{,}0\,\mathrm{cm} = 0{,}040\,\mathrm{m}$
**Iščemo:** $t_0$, $\nu$, $v_{\max}$, $a_{\max}$

:::formula
$\omega_0 = \sqrt{k/m}$, $t_0 = 2\pi/\omega_0$, $\nu = 1/t_0$, $v_{\max} = \omega_0 x_0$, $a_{\max} = \omega_0^2 x_0$
:::

**Rešitev:**

1. Najprej krožna frekvenca, ker iz nje sledijo vse druge količine: $\omega_0 = \sqrt{40\,\mathrm{N/m} / 0{,}25\,\mathrm{kg}} = \sqrt{160}\,\mathrm{s^{-1}} \approx 12{,}6\,\mathrm{s^{-1}}$.
2. $t_0 = 2\pi/12{,}65\,\mathrm{s^{-1}} \approx 0{,}497\,\mathrm{s}$, $\nu = 1/t_0 \approx 2{,}01\,\mathrm{Hz}$.
3. Največja hitrost (v ravnovesni legi): $v_{\max} = 12{,}65\,\mathrm{s^{-1}} \cdot 0{,}040\,\mathrm{m} \approx 0{,}506\,\mathrm{m/s}$.
4. Največji pospešek je v skrajni legi, kjer je sila vzmeti največja: $a_{\max} = 160\,\mathrm{s^{-2}} \cdot 0{,}040\,\mathrm{m} = 6{,}4\,\mathrm{m/s^2}$.
5. Odgovor: utež niha z nihajnim časom približno $0{,}50\,\mathrm{s}$ (frekvenca $2{,}0\,\mathrm{Hz}$), največja hitrost je približno $0{,}51\,\mathrm{m/s}$, največji pospešek pa $6{,}4\,\mathrm{m/s^2}$.

### Primer 2

Matematično nihalo ima dolžino $1{,}20\,\mathrm{m}$. Utež izmaknemo tako, da je vodoravni odmik $5{,}0\,\mathrm{cm}$, in jo spustimo. Kolikšen je nihajni čas in kolikšna je največja hitrost uteži? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $l = 1{,}20\,\mathrm{m}$, $x_0 = 5{,}0\,\mathrm{cm} = 0{,}050\,\mathrm{m}$ (majhen odklon), $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** nihajni čas $t_0$ in največjo hitrost $v_{\max}$

:::formula
$\omega_0 = \sqrt{g/l}$, $t_0 = 2\pi\sqrt{l/g}$, $v_{\max} = \omega_0 x_0$
:::

**Rešitev:**

1. Odklon je majhen: $\varphi_0 \approx 0{,}050/1{,}20 \approx 0{,}042\,\mathrm{rad} \approx 2{,}4^\circ$, zato velja harmonični približek.
2. Ker velja $\sin\varphi \approx \varphi$, je $\omega_0 = \sqrt{9{,}81/1{,}20}\,\mathrm{s^{-1}} \approx 2{,}86\,\mathrm{s^{-1}}$.
3. $t_0 = 2\pi/2{,}859\,\mathrm{s^{-1}} \approx 2{,}20\,\mathrm{s}$.
4. Pri majhnem odklonu je lok skoraj enak vodoravnemu odmiku, zato $v_{\max} = 2{,}859\,\mathrm{s^{-1}} \cdot 0{,}050\,\mathrm{m} \approx 0{,}143\,\mathrm{m/s}$.
5. Preizkus z energijo: dvig uteži je $h = l(1 - \cos\varphi_0) \approx l\varphi_0^2/2 \approx 1{,}04\,\mathrm{mm}$, $v = \sqrt{2gh} \approx 0{,}143\,\mathrm{m/s}$. ✓
6. Odgovor: nihajni čas je približno $2{,}20\,\mathrm{s}$, največja hitrost pa približno $0{,}14\,\mathrm{m/s}$.

### Primer 3 (težji)

Utež z maso $0{,}50\,\mathrm{kg}$ niha na vzmeti s koeficientom $50\,\mathrm{N/m}$ v zraku. Amplituda se v $8{,}0\,\mathrm{s}$ zmanjša z $10\,\mathrm{cm}$ na $5{,}0\,\mathrm{cm}$. Kolikšna sta koeficient dušenja in koeficient upora $b$? Koliko nihajev naredi utež v tem času in po kolikšnem času je amplituda le še $1\,\%$ začetne?

**Podatki:** $m = 0{,}50\,\mathrm{kg}$, $k = 50\,\mathrm{N/m}$, $x_0 = 10\,\mathrm{cm}$, po $t_1 = 8{,}0\,\mathrm{s}$ je amplituda $5{,}0\,\mathrm{cm}$, upor $F_u = -bv$
**Iščemo:** $\beta$, $b$, število nihajev v $8{,}0\,\mathrm{s}$, čas $t_2$, ko je amplituda $1\,\%$ začetne

:::formula
Amplituda $x_0e^{-\beta t}$, $\beta = b/(2m)$, $\omega = \sqrt{\omega_0^2 - \beta^2}$, $t_0 = 2\pi/\omega$
:::

**Rešitev:**

1. Amplituda pojema kot $x_0e^{-\beta t}$ in se v $t_1$ razpolovi, zato iz $e^{-\beta t_1} = 1/2$ sledi $\beta = \ln 2/t_1 = 0{,}693/8{,}0\,\mathrm{s} \approx 0{,}0866\,\mathrm{s^{-1}}$.
2. Koeficient upora: $b = 2m\beta = 2 \cdot 0{,}50\,\mathrm{kg} \cdot 0{,}0866\,\mathrm{s^{-1}} \approx 0{,}0866\,\mathrm{kg/s}$.
3. Lastna krožna frekvenca: $\omega_0 = \sqrt{50/0{,}50}\,\mathrm{s^{-1}} = 10\,\mathrm{s^{-1}}$. Ker je $\beta \ll \omega_0$, je $\omega = \sqrt{100 - 0{,}0075}\,\mathrm{s^{-1}} \approx 10{,}0\,\mathrm{s^{-1}}$ in $t_0 \approx 0{,}628\,\mathrm{s}$.
4. Število nihajev v $8{,}0\,\mathrm{s}$ (čas, deljen z nihajnim časom): $8{,}0/0{,}628 \approx 12{,}7$.
5. Amplituda $1\,\%$: $e^{-\beta t_2} = 0{,}01$, torej $t_2 = \ln 100/\beta = 4{,}605/0{,}0866\,\mathrm{s} \approx 53\,\mathrm{s}$.
6. Odgovor: koeficient dušenja je približno $0{,}087\,\mathrm{s^{-1}}$, koeficient upora približno $0{,}087\,\mathrm{kg/s}$; v $8{,}0\,\mathrm{s}$ utež naredi približno $12{,}7$ nihaja, amplituda pa pade na $1\,\%$ po približno $53\,\mathrm{s}$. Energija se v vsakih $8{,}0\,\mathrm{s}$ zmanjša na četrtino.

### Primer 4 – zdaj ti

Membrana nizkotonskega zvočnika ima skupaj s tuljavo maso $20\,\mathrm{g}$, prožno vpetje pa jo vleče nazaj s koeficientom $2000\,\mathrm{N/m}$. Pri kateri frekvenci zvočnik sam od sebe najraje niha in kolikšna sta največja hitrost in največji pospešek membrane, ko niha z amplitudo $2{,}0\,\mathrm{mm}$?

**Podatki:** $m = 20\,\mathrm{g} = 0{,}020\,\mathrm{kg}$, $k = 2000\,\mathrm{N/m}$, $x_0 = 2{,}0\,\mathrm{mm} = 0{,}0020\,\mathrm{m}$
**Iščemo:** lastno frekvenco $\nu_0$, $v_{\max}$, $a_{\max}$

:::formula
$\omega_0 = \sqrt{k/m}$, $\nu_0 = \omega_0/(2\pi)$, $v_{\max} = \omega_0 x_0$, $a_{\max} = \omega_0^2 x_0$
:::

**Rešitev:**

1. Membrana z vpetjem je nihalo na vzmeti, zato $\omega_0 = \sqrt{2000/0{,}020}\,\mathrm{s^{-1}} = \sqrt{100\,000}\,\mathrm{s^{-1}} \approx 316\,\mathrm{s^{-1}}$.
2. Lastna frekvenca: $\nu_0 = 316/(2\pi)\,\mathrm{Hz} \approx 50{,}3\,\mathrm{Hz}$, globok bas.
3. Izračunaj $v_{\max}$ in $a_{\max}$ sam, nato preveri:

:::premisli
Kolikšna sta $v_{\max}$ in $a_{\max}$ membrane? Kolikokrat je $a_{\max}$ večji od $g$?
---
$v_{\max} = 316\,\mathrm{s^{-1}} \cdot 0{,}0020\,\mathrm{m} \approx 0{,}63\,\mathrm{m/s}$, $a_{\max} = 100\,000\,\mathrm{s^{-2}} \cdot 0{,}0020\,\mathrm{m} = 200\,\mathrm{m/s^2}$, kar je približno $20$-krat več od $g$.
:::

## Pogoste napake

- **Stopinje v $\sin\varphi \approx \varphi$.** Približek velja le, če je kot v radianih. Tudi v $\cos(\omega_0 t + \delta)$ mora biti kalkulator nastavljen na radiane.
- **Mešanje $\omega$ in $\nu$.** $\omega = 2\pi\nu$. Formula $t_0 = 2\pi\sqrt{m/k}$ že vsebuje faktor $2\pi$; ne deli še enkrat.
- **Nihajni čas odvisen od amplitude.** Pri harmoničnem nihanju ni. Pri matematičnem nihalu je odvisnost opazna šele pri velikih odklonih.
- **Masa pri matematičnem nihalu.** Nihajni čas matematičnega nihala ni odvisen od mase uteži; nihalo na vzmeti pa z večjo maso niha počasneje.
- **Največja hitrost v skrajni legi.** V skrajni legi je hitrost nič, pospešek pa največji. V ravnovesni legi je obratno.
- **Dušenje in energija.** Amplituda pojema kot $e^{-\beta t}$, energija pa kot $e^{-2\beta t}$. Ko se amplituda razpolovi, ostane le četrtina energije.

## Povzetek

- Harmonično nihanje: $F = -kx$, $\ddot{x} + \omega_0^2x = 0$, $x = x_0\cos(\omega_0 t + \delta)$.
- $v_{\max} = \omega_0x_0$ (v ravnovesni legi), $a_{\max} = \omega_0^2x_0$ (v skrajni legi); $t_0 = 2\pi/\omega_0$, $\nu = 1/t_0$.
- Vzmet: $t_0 = 2\pi\sqrt{m/k}$; matematično nihalo (majhni odkloni): $t_0 = 2\pi\sqrt{l/g}$.
- Energija: $W = \tfrac{1}{2}kx_0^2 = \tfrac{1}{2}mv_{\max}^2$, sorazmerna s kvadratom amplitude.
- Dušenje: $\ddot{x} + 2\beta\dot{x} + \omega_0^2x = 0$; šibko: amplituda $\propto e^{-\beta t}$, $\omega = \sqrt{\omega_0^2 - \beta^2}$; kritično pri $\beta = \omega_0$.

## Drugače: Na sliki

Harmonično nihanje je **senca enakomernega kroženja**. Predstavljaj si kroglico, ki enakomerno kroži s kotno hitrostjo $\omega_0$ po krožnici s polmerom $x_0$, in njeno senco na steni:

```
     krog                 senca na osi x
      .--.
    /  o   \    ---->   |-----o----|----------|
   |   +    |           -x0        0         x0
    \      /
      '--'
```

Ko kroglica obkroži krožnico enkrat, senca naredi en cel nihaj. Projekcija lege je $x_0\cos\omega_0 t$, projekcija hitrosti $-\omega_0x_0\sin\omega_0 t$, projekcija radialnega pospeška $-\omega_0^2x$. Iz te slike je jasno, zakaj je senca najhitrejša na sredini in se v skrajnih legah ustavi.

Graf dušenega nihanja je kosinusna krivulja, ki jo od zgoraj in spodaj omejujeta eksponentni ovojnici $\pm x_0e^{-\beta t}$. Pri kritičnem dušenju krivulja le enkrat pade proti ničli, ne da bi jo prečkala.

## Drugače: Iz vsakdanjega življenja

**Nihanje molekul in infrardeča spektroskopija.** Vez med atomoma v molekuli se obnaša kot vzmet. Za molekulo $\mathrm{HCl}$ je koeficient vezi okoli $516\,\mathrm{N/m}$, reducirana masa $\mu = m_\mathrm{H}m_\mathrm{Cl}/(m_\mathrm{H} + m_\mathrm{Cl}) \approx 1{,}63 \cdot 10^{-27}\,\mathrm{kg}$. Frekvenca nihanja je $\nu = \frac{1}{2\pi}\sqrt{k/\mu} \approx 9{,}0 \cdot 10^{13}\,\mathrm{Hz}$, kar ustreza infrardeči svetlobi. Iz izmerjenih absorpcijskih črt kemiki ugotovijo, katere vezi so v molekuli.

**Blažilniki v avtomobilu.** Vzmeti avtomobila skupaj s karoserijo tvorijo nihalo z nihajnim časom okoli $1\,\mathrm{s}$. Blažilniki ga dušijo skoraj kritično, da se avtomobil po luknji hitro umiri brez poskakovanja. Obrabljen blažilnik spoznaš po tem, da avto po pritisku še nekajkrat zaniha.

**Ure in metronomi.** Matematično nihalo z dolžino okoli $1\,\mathrm{m}$ ima nihajni čas okoli $2\,\mathrm{s}$ (vsak polnihaj traja eno sekundo), zato so ga uporabljali v nihalnih urah. Na Luni, kjer je $g$ šestkrat manjši, bi ista ura tekla $\sqrt{6} \approx 2{,}45$-krat počasneje.

**Resonanca.** Mostovi, stavbe in deli strojev imajo lastne frekvence. Če jih zunanja sila (veter, koraki, potres, vibracije motorja) vzbuja s podobno frekvenco, se amplituda nevarno poveča. Zato v stavbe vgrajujejo dušilnike, v laboratoriju pa tehtnice in mikroskope postavljajo na mize, ki dušijo tresljaje.

## Drugače: Korak za korakom s številkami

Utež z maso $0{,}20\,\mathrm{kg}$ visi na vzmeti s $k = 20\,\mathrm{N/m}$. Ob $t = 0$ je $3{,}0\,\mathrm{cm}$ od ravnovesne lege in se giblje s hitrostjo $0{,}40\,\mathrm{m/s}$. Kolikšna je amplituda?

1. **Krožna frekvenca:** $\omega_0 = \sqrt{20/0{,}20}\,\mathrm{s^{-1}} = 10\,\mathrm{s^{-1}}$.
2. **Energija ob $t = 0$:** $W = \tfrac{1}{2} \cdot 20 \cdot 0{,}030^2 + \tfrac{1}{2} \cdot 0{,}20 \cdot 0{,}40^2 = 0{,}0090 + 0{,}016 = 0{,}025\,\mathrm{J}$.
3. **Amplituda iz energije:** $\tfrac{1}{2}kx_0^2 = 0{,}025\,\mathrm{J}$, torej $x_0 = \sqrt{2 \cdot 0{,}025/20}\,\mathrm{m} = 0{,}050\,\mathrm{m}$.
4. **Preizkus s formulo:** $x_0 = \sqrt{x(0)^2 + (v(0)/\omega_0)^2} = \sqrt{0{,}030^2 + 0{,}040^2}\,\mathrm{m} = 0{,}050\,\mathrm{m}$. ✓
5. **Največja hitrost:** $v_{\max} = \omega_0x_0 = 10 \cdot 0{,}050\,\mathrm{m/s} = 0{,}50\,\mathrm{m/s}$.
6. **Fazni zamik** (za $x = x_0\cos(\omega_0t + \delta)$): $\cos\delta = 0{,}030/0{,}050 = 0{,}60$ in $\sin\delta = -v(0)/(\omega_0x_0) = -0{,}80$, torej $\delta \approx -0{,}93\,\mathrm{rad}$.

## Drugače: Bolj natančno

**Rešitev enačbe nihanja.** Enačba $\ddot{x} + \omega_0^2x = 0$ je linearna s konstantnimi koeficienti. Nastavek $x = e^{\lambda t}$ da karakteristično enačbo $\lambda^2 + \omega_0^2 = 0$ z rešitvama $\lambda = \pm i\omega_0$. Realna splošna rešitev je $x = A\cos\omega_0t + B\sin\omega_0t = x_0\cos(\omega_0t + \delta)$ z $x_0 = \sqrt{A^2 + B^2}$. Konstanti določita začetna pogoja $x(0) = A$ in $\dot{x}(0) = B\omega_0$; po izreku o enoličnosti je rešitev s temi pogoji ena sama.

**Dušeno nihanje.** Za $\ddot{x} + 2\beta\dot{x} + \omega_0^2x = 0$ je karakteristična enačba $\lambda^2 + 2\beta\lambda + \omega_0^2 = 0$, torej $\lambda = -\beta \pm \sqrt{\beta^2 - \omega_0^2}$. Pri $\beta < \omega_0$ sta korena kompleksna, $\lambda = -\beta \pm i\omega$, in rešitev je $x_0e^{-\beta t}\cos(\omega t + \delta)$. Pri $\beta = \omega_0$ je dvojni koren in $x = (A + Bt)e^{-\beta t}$. Pri $\beta > \omega_0$ sta oba korena realna in negativna, zato je rešitev vsota dveh pojemajočih eksponentnih funkcij brez nihanja. Moč sile upora je $P = F_uv = -bv^2$, zato je $\mathrm{d}W/\mathrm{d}t = -bv^2 \le 0$.

**Matematično nihalo pri velikih odklonih.** Iz ohranitve energije $\tfrac{1}{2}ml^2\dot{\varphi}^2 = mgl(\cos\varphi - \cos\varphi_0)$ dobimo natančen nihajni čas kot eliptični integral. Razvoj da

$$t_0 = 2\pi\sqrt{\frac{l}{g}}\left(1 + \frac{\varphi_0^2}{16} + \dots\right).$$

Pri $\varphi_0 = 20^\circ$ ($0{,}35\,\mathrm{rad}$) je popravek manj kot $1\,\%$.

**Fizično nihalo.** Togo telo, ki niha okoli vodoravne osi na razdalji $d$ od masnega središča, ima enačbo $J\ddot{\varphi} = -mgd\sin\varphi$ in pri majhnih odklonih $t_0 = 2\pi\sqrt{J/(mgd)}$. Za točkasto maso je $J = ml^2$ in $d = l$, kar da formulo za matematično nihalo.

**Zakaj je harmonično nihanje tako splošno.** Potencialno energijo okoli minimuma pri $x = 0$ razvijemo v Taylorjevo vrsto: $W_p(x) \approx W_p(0) + \tfrac{1}{2}W_p''(0)x^2$, ker je $W_p'(0) = 0$. Sila $F = -W_p'(x) \approx -W_p''(0)x$ je v prvem približku harmonična s $k = W_p''(0)$.

## Preveri se

? Maso uteži na vzmeti povečamo na štirikratno vrednost. Kako se spremeni nihajni čas?
- Poveča se štirikrat.
~ Nihajni čas ni sorazmeren z maso, ampak s korenom mase: pod korenom v $t_0 = 2\pi\sqrt{m/k}$.
+ Poveča se dvakrat.
- Ostane enak.
~ Neodvisnost od mase velja za matematično nihalo; pri vzmeti ista sila $kx$ pospešuje večjo maso, zato niha počasneje.
> $t_0 = 2\pi\sqrt{m/k}$, zato je nihajni čas sorazmeren s $\sqrt{m}$; $\sqrt{4} = 2$.

? Lega nihala je $x = 0{,}10\,\mathrm{m}\cdot\cos(4{,}0\,\mathrm{s^{-1}}\cdot t)$. Kolikšna je največja hitrost?
- $0{,}10\,\mathrm{m/s}$
~ To je amplituda $x_0$ z napačno enoto; pomnožiti jo moraš še s krožno frekvenco $\omega_0$.
- $1{,}6\,\mathrm{m/s}$
~ To je $\omega_0^2x_0$, torej največji pospešek v $\mathrm{m/s^2}$, ne hitrost.
+ $0{,}40\,\mathrm{m/s}$
> $v_{\max} = \omega_0x_0 = 4{,}0\,\mathrm{s^{-1}} \cdot 0{,}10\,\mathrm{m} = 0{,}40\,\mathrm{m/s}$. $1{,}6$ je največji pospešek v $\mathrm{m/s^2}$.

? Kolikšen je nihajni čas matematičnega nihala z dolžino $1{,}0\,\mathrm{m}$ ($g = 9{,}81\,\mathrm{m/s^2}$)?
+ $2{,}0\,\mathrm{s}$
- $0{,}32\,\mathrm{s}$
~ To je le $\sqrt{l/g}$; pozabljen je faktor $2\pi$.
- $1{,}0\,\mathrm{s}$
~ To je čas polnihaja (od ene skrajne lege do druge); nihajni čas je čas celega nihaja tja in nazaj.
> $t_0 = 2\pi\sqrt{1{,}0/9{,}81}\,\mathrm{s} \approx 2{,}0\,\mathrm{s}$. $0{,}32\,\mathrm{s}$ je $\sqrt{l/g}$ brez faktorja $2\pi$.

? Amplituda šibko dušenega nihala se razpolovi. Kolikšen del začetne energije mu ostane?
- Polovica.
~ Energija ni sorazmerna z amplitudo, ampak z njenim kvadratom, $W = \tfrac{1}{2}kx_0^2$.
+ Četrtina.
- Osmina.
~ Osmina bi bila $(1/2)^3$; energija je odvisna od kvadrata amplitude, ne od kuba.
> Energija je sorazmerna s kvadratom amplitude: $(1/2)^2 = 1/4$.

? Glasbene vilice za ton A nihajo s $440\,\mathrm{Hz}$. Katero količino podaja ta podatek?
- Nihajni čas.
~ Nihajni čas je čas enega nihaja, tu $1/440\,\mathrm{s} \approx 2{,}3\,\mathrm{ms}$; meri se v sekundah, ne v hercih.
+ Frekvenca.
- Krožna frekvenca.
~ Krožna frekvenca je $2\pi$-krat večja, $\omega = 2\pi\nu \approx 2760\,\mathrm{s^{-1}}$.
> Frekvenca $\nu = 1/t_0$ je število nihajev v sekundi, enota $\mathrm{Hz} = \mathrm{s^{-1}}$.
