## Odvodi

| | |
|---|---|
| Definicija | $f'(x) = \lim\limits_{h \to 0} \dfrac{f(x+h) - f(x)}{h}$ |
| Pravila | $(f g)' = f' g + f g'$, $\; \left(\dfrac{f}{g}\right)' = \dfrac{f' g - f g'}{g^2}$, $\; \big(f(g(x))\big)' = f'(g(x))\, g'(x)$ |
| Potence, eksponent, logaritem | $(x^a)' = a x^{a-1}$, $\; (e^x)' = e^x$, $\; (a^x)' = a^x \ln a$, $\; (\ln x)' = \dfrac{1}{x}$, $\; (\log_a x)' = \dfrac{1}{x \ln a}$ |
| Kotne funkcije | $(\sin x)' = \cos x$, $\; (\cos x)' = -\sin x$, $\; (\tan x)' = \dfrac{1}{\cos^2 x}$, $\; (\cot x)' = -\dfrac{1}{\sin^2 x}$ |
| Krožne funkcije | $(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$, $\; (\arccos x)' = -\dfrac{1}{\sqrt{1-x^2}}$, $\; (\arctan x)' = \dfrac{1}{1+x^2}$ |
| Hiperbolične funkcije | $(\sinh x)' = \cosh x$, $\; (\cosh x)' = \sinh x$, $\; \cosh^2 x - \sinh^2 x = 1$ |
| L'Hospitalovo pravilo | $\lim \dfrac{f}{g} = \lim \dfrac{f'}{g'}$ pri $\dfrac{0}{0}$ ali $\dfrac{\infty}{\infty}$ |
| Tangenta | $y = f(x_0) + f'(x_0)(x - x_0)$ |

## Pomembne limite

| | |
|---|---|
| Kotne | $\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$, $\; \lim\limits_{x \to 0} \dfrac{1 - \cos x}{x^2} = \dfrac{1}{2}$ |
| Število $e$ | $\lim\limits_{n \to \infty} \left(1 + \dfrac{1}{n}\right)^n = e$, $\; \lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = 1$, $\; \lim\limits_{x \to 0} \dfrac{\ln(1+x)}{x} = 1$ |
| Rast | $\lim\limits_{x \to \infty} \dfrac{x^a}{e^x} = 0$, $\; \lim\limits_{x \to \infty} \dfrac{\ln x}{x^a} = 0$ ($a > 0$) |

## Integrali

| | |
|---|---|
| Osnovni | $\int x^a\,dx = \dfrac{x^{a+1}}{a+1} + C$ ($a \ne -1$), $\; \int \dfrac{dx}{x} = \ln\lvert x\rvert + C$, $\; \int e^x\,dx = e^x + C$ |
| Kotni | $\int \sin x\,dx = -\cos x + C$, $\; \int \cos x\,dx = \sin x + C$, $\; \int \dfrac{dx}{\cos^2 x} = \tan x + C$ |
| Racionalni | $\int \dfrac{dx}{1+x^2} = \arctan x + C$, $\; \int \dfrac{dx}{a^2 + x^2} = \dfrac{1}{a}\arctan\dfrac{x}{a} + C$, $\; \int \dfrac{dx}{\sqrt{1-x^2}} = \arcsin x + C$ |
| Per partes | $\int u\,dv = u v - \int v\,du$ |
| Uvedba nove spremenljivke | $\int f(g(x))\, g'(x)\,dx = \int f(t)\,dt$ ($t = g(x)$) |
| Newton–Leibniz | $\int_a^b f(x)\,dx = F(b) - F(a)$ ($F' = f$) |
| Ploščina, prostornina | $S = \int_a^b \lvert f(x) - g(x)\rvert\,dx$, $\; V = \pi \int_a^b f(x)^2\,dx$ (vrtenje okoli osi $x$) |
| Dolžina loka | $s = \int_a^b \sqrt{1 + f'(x)^2}\,dx$ |

## Vrste

| | |
|---|---|
| Geometrijska | $\sum\limits_{n=0}^{\infty} q^n = \dfrac{1}{1-q}$ ($\lvert q\rvert < 1$) |
| Taylorjeva | $f(x) = \sum\limits_{n=0}^{\infty} \dfrac{f^{(n)}(a)}{n!}(x-a)^n$ |
| Razvoji pri $0$ | $e^x = \sum \dfrac{x^n}{n!}$, $\; \sin x = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dots$, $\; \cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dots$ |
| | $\ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dots$ ($-1 < x \le 1$), $\; (1+x)^a = \sum \binom{a}{n} x^n$ ($\lvert x\rvert < 1$) |
| Konvergenca | kvocientni kriterij: $\lim \left\lvert \dfrac{a_{n+1}}{a_n} \right\rvert < 1$; korenski: $\lim \sqrt[n]{\lvert a_n\rvert} < 1$; $\sum \dfrac{1}{n^p}$ konvergira za $p > 1$ |

## Funkcije več spremenljivk

| | |
|---|---|
| Gradient | $\nabla f = \left(\dfrac{\partial f}{\partial x}, \dfrac{\partial f}{\partial y}, \dfrac{\partial f}{\partial z}\right)$, smerni odvod $\dfrac{\partial f}{\partial \vec{e}} = \nabla f \cdot \vec{e}$ |
| Totalni diferencial | $df = \dfrac{\partial f}{\partial x}dx + \dfrac{\partial f}{\partial y}dy$ |
| Ekstremi | $\nabla f = 0$; $D = f_{xx} f_{yy} - f_{xy}^2$: $D > 0$ in $f_{xx} > 0$ minimum, $D > 0$ in $f_{xx} < 0$ maksimum, $D < 0$ sedlo |
| Vezani ekstremi | $\nabla f = \lambda \nabla g$ in $g = 0$ (Lagrange) |
| Dvojni, trojni integral | polarne koordinate: $dx\,dy = r\,dr\,d\varphi$; cilindrične $dV = r\,dr\,d\varphi\,dz$; sferne $dV = r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi$ |

## Diferencialne enačbe

| | |
|---|---|
| Ločljive spremenljivke | $y' = f(x)\,g(y) \Rightarrow \int \dfrac{dy}{g(y)} = \int f(x)\,dx$ |
| Linearna 1. reda | $y' + p(x)\,y = q(x)$: $\; y = e^{-\int p\,dx}\left(\int q\,e^{\int p\,dx}\,dx + C\right)$ |
| Linearna 2. reda s konstantnimi koeficienti | $a y'' + b y' + c y = 0$, karakteristična enačba $a\lambda^2 + b\lambda + c = 0$ |
| Rešitve | $\lambda_1 \ne \lambda_2$ realni: $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$; dvojni $\lambda$: $y = (C_1 + C_2 x)e^{\lambda x}$; $\lambda = \alpha \pm i\beta$: $y = e^{\alpha x}(C_1 \cos\beta x + C_2 \sin\beta x)$ |

## Linearna algebra

| | |
|---|---|
| Skalarni produkt | $\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = \lvert\vec{a}\rvert\,\lvert\vec{b}\rvert \cos\varphi$ |
| Vektorski produkt | $\vec{a} \times \vec{b} = (a_2 b_3 - a_3 b_2,\ a_3 b_1 - a_1 b_3,\ a_1 b_2 - a_2 b_1)$, $\; \lvert\vec{a} \times \vec{b}\rvert = \lvert\vec{a}\rvert\,\lvert\vec{b}\rvert \sin\varphi$ |
| Mešani produkt | $(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}$ = prostornina paralelepipeda |
| Projekcija | $\operatorname{proj}_{\vec{b}} \vec{a} = \dfrac{\vec{a} \cdot \vec{b}}{\vec{b} \cdot \vec{b}}\,\vec{b}$ |
| Premica, ravnina | $\vec{r} = \vec{r}_0 + t\,\vec{s}$; $\; \vec{n} \cdot (\vec{r} - \vec{r}_0) = 0$, $\; a x + b y + c z = d$ |
| Razdalja točke od ravnine | $d = \dfrac{\lvert a x_0 + b y_0 + c z_0 - d\rvert}{\sqrt{a^2 + b^2 + c^2}}$ |
| Determinanta $2 \times 2$ | $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = a d - b c$ |
| Inverz $2 \times 2$ | $A^{-1} = \dfrac{1}{a d - b c}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ |
| Pravila | $(A B)^{-1} = B^{-1} A^{-1}$, $\; (A B)^T = B^T A^T$, $\; \det(A B) = \det A \det B$ |
| Lastne vrednosti | $A\vec{v} = \lambda\vec{v}$, $\; \det(A - \lambda I) = 0$, $\; \sum \lambda_i = \operatorname{sl} A$, $\; \prod \lambda_i = \det A$ |
| Cramerjevo pravilo | $x_i = \dfrac{\det A_i}{\det A}$ |
| Rang | $A\vec{x} = \vec{b}$ je rešljiv $\iff \operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}]$ |

## Kompleksna števila

| | |
|---|---|
| Zapis | $z = a + b i = r(\cos\varphi + i \sin\varphi) = r e^{i\varphi}$, $\; r = \sqrt{a^2 + b^2}$ |
| De Moivre | $z^n = r^n (\cos n\varphi + i \sin n\varphi)$ |
| Koreni | $\sqrt[n]{z} = \sqrt[n]{r}\left(\cos\dfrac{\varphi + 2k\pi}{n} + i \sin\dfrac{\varphi + 2k\pi}{n}\right)$ ($k = 0, \dots, n-1$) |
| Euler | $e^{i\varphi} = \cos\varphi + i \sin\varphi$ |

## Verjetnost in statistika

| | |
|---|---|
| Kombinatorika | $P_n = n!$, $\; V_n^r = \dfrac{n!}{(n-r)!}$, $\; C_n^r = \binom{n}{r} = \dfrac{n!}{r!\,(n-r)!}$ |
| Pogojna verjetnost | $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$, $\; P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Bayes | $P(H_i \mid A) = \dfrac{P(A \mid H_i)\,P(H_i)}{\sum_j P(A \mid H_j)\,P(H_j)}$ |
| Pričakovana vrednost, disperzija | $E(X) = \sum x_i p_i$, $\; D(X) = E(X^2) - E(X)^2$, $\; \sigma = \sqrt{D(X)}$ |
| Binomska $B(n, p)$ | $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$, $\; E = n p$, $\; D = n p (1-p)$ |
| Poissonova $\mathrm{Po}(\lambda)$ | $P(X = k) = \dfrac{\lambda^k e^{-\lambda}}{k!}$, $\; E = D = \lambda$ |
| Normalna $N(\mu, \sigma^2)$ | $f(x) = \dfrac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$, $\; Z = \dfrac{X - \mu}{\sigma}$ |
| Eksponentna | $f(x) = \lambda e^{-\lambda x}$ ($x \ge 0$), $\; E = \dfrac{1}{\lambda}$, $\; D = \dfrac{1}{\lambda^2}$ |
| Vzorec | $\bar{x} = \dfrac{1}{n}\sum x_i$, $\; s^2 = \dfrac{1}{n-1}\sum (x_i - \bar{x})^2$ |
| Interval zaupanja za $\mu$ | $\bar{x} \pm t_{n-1,\,\alpha/2}\,\dfrac{s}{\sqrt{n}}$ (pri znanem $\sigma$: $\bar{x} \pm z_{\alpha/2}\,\dfrac{\sigma}{\sqrt{n}}$; $z_{0{,}025} = 1{,}96$) |
| Linearna regresija | $y = k x + n$, $\; k = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$, $\; n = \bar{y} - k \bar{x}$ |
| Korelacijski koeficient | $r = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}$ |
