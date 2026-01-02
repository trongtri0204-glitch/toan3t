// File: data.js
const examDatabase = {
  12: [
    {
      topic: "Nguyên hàm - Tích phân",
      exams: [
        {
          title: "Đề 01",
          questions: [
            // PHẦN I (12 câu)
            {
              part: 1, type: "v1",
              q: "Mệnh đề nào dưới đây là <b>sai</b>?",
              a: [
                "$\\displaystyle \\int f'(x) dx = f(x)+C$",
                "$\\displaystyle \\int [f(x)+g(x)] dx = \\int f(x)dx + \\int g(x)dx$",
                "$\\displaystyle \\int k f(x) dx = k \\int f(x)dx$",
                "$\\displaystyle \\int [f(x)-g(x)] dx = \\int f(x)dx - \\int g(x)dx$",
              ],
              c: 2,
              sol: "Tính chất $\\displaystyle \\int k f(x) dx = k \\int f(x)dx$ chỉ đúng khi hằng số $k \\neq 0$. Nếu $k=0$, vế trái là $\\int 0 dx = C$, vế phải là $0 \\cdot \\int f(x)dx = 0$.",
            },
            {
              part: 1, type: "v1",
              q: "Nguyên hàm của hàm số $f(x) = \\cos x$ là:",
              a: ["$-\\sin x + C$", "$\\sin x + C$", "$\\cos x + C$", "$-\\cos x + C$"],
              c: 1,
              sol: "Vì $\\displaystyle (\\sin x + C)' = \\cos x$ nên $\\displaystyle \\int \\cos x dx = \\sin x + C$.",
            },
            {
              part: 1, type: "v1",
              q: "Tìm họ nguyên hàm của hàm số $f(x) = 5^x$.",
              a: ["$5^x + C$", "$5^x \\ln 5 + C$", "$\\displaystyle \\dfrac{5^x}{\\ln 5} + C$", "$\\displaystyle \\dfrac{5^{x+1}}{x+1} + C$"],
              c: 2,
              sol: "Áp dụng công thức nguyên hàm hàm số mũ: $\\displaystyle \\int a^x dx = \\dfrac{a^x}{\\ln a} + C$.",
            },
            {
              part: 1, type: "v1",
              q: "Cho hàm số $f(x)$ liên tục trên $K$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $K$. Khẳng định nào sau đây đúng?",
              a: ["$f'(x) = F(x)$", "$F'(x) = f(x)$", "$F(x) = f(x)$", "$F'(x) = f'(x)$"],
              c: 1,
              sol: "Theo định nghĩa nguyên hàm: Hàm số $F(x)$ được gọi là nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$.",
            },
            {
              part: 1, type: "v1",
              q: "Tìm họ nguyên hàm của hàm số $f(x) = \\dfrac{1}{x^2}$.",
              a: ["$\\displaystyle \\dfrac{1}{x} + C$", "$\\displaystyle -\\dfrac{1}{x} + C$", "$\\displaystyle \\dfrac{1}{2x} + C$", "$\\ln x^2 + C$"],
              c: 1,
              sol: "Ta có $\\displaystyle \\int \\dfrac{1}{x^2} dx = \\int x^{-2} dx = \\dfrac{x^{-1}}{-1} + C = -\\dfrac{1}{x} + C$.",
            },
            {
              part: 1, type: "v1",
              q: "Họ nguyên hàm của hàm số $f(x) = x^2 - 3x + \\dfrac{1}{x}$ là:",
              a: [
                "$F(x) = 2x - 3 - 1/x^2 + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln|x| + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} + \\frac{3}{2}x^2 + \\ln x + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln x + C$"
              ],
              c: 1,
              sol: "Lấy nguyên hàm từng số hạng: $\\displaystyle \\int x^2 dx = x^3/3$; $\\displaystyle\\int -3x dx = -3x^2/2$; $\\int (1/x) dx = \\ln|x|.",
            },
            {
              part: 1, type: "v1",
              q: "Cho $a, b, c \\in K$ và hàm số $f(x)$ liên tục trên $K$. Mệnh đề nào sau đây <b>sai</b>?",
              a: [
                "$\\displaystyle \\int_a^b f(x)dx + \\int_c^b f(x)dx = \\int_a^c f(x)dx$",
                "$\\displaystyle \\int_a^b f(x)dx = \\int_a^b f(t)dt$",
                "$\\displaystyle \\int_a^b f(x)dx = -\\int_b^a f(x)dx$",
                "$\\displaystyle \\int_a^a f(x)dx = 0$"
              ],
              c: 0,
              sol: "Tính chất nối cận đúng phải là: $\\displaystyle \\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx$.",
            },
            {
              part: 1, type: "v1",
              q: "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)$. Hiệu số $F(0)-F(1)$ bằng:",
              a: ["$\\displaystyle \\int_0^1 f(x)dx$", "$\\displaystyle \\int_0^1 F(x)dx$", "$\\displaystyle \\int_1^0 F(x)dx$", "$\\displaystyle \\int_1^0 f(x)dx$"],
              c: 3,
              sol: "Theo công thức Newton-Leibniz: $\\displaystyle \\int_1^0 f(x)dx = F(0) - F(1)$.",
            },
            {
              part: 1, type: "v1",
              q: "Cho $f(1)=2, f(3)=9$. Tính tích phân $I = \\displaystyle \\int_1^3 f'(x)dx$.",
              a: ["11", "7", "2", "18"],
              c: 1,
              sol: "Ta có $\\displaystyle I = f(x) \\big|_1^3 = f(3) - f(1) = 9 - 2 = 7$.",
            },
            {
              part: 1, type: "v1",
              q: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$ liên tục, trục hoành và hai đường thẳng $x=a, x=b$ ($a < b$) là:",
              a: ["$S=\\displaystyle \\pi \\int_a^b f^2(x)dx$", "$S=\\displaystyle \\int_a^b f(x)dx$", "$S=\\displaystyle \\pi \\int_a^b |f(x)|dx$", "$S=\\displaystyle \\int_a^b |f(x)|dx$"],
              c: 3,
              sol: "Đây là công thức cơ bản tính diện tích hình phẳng giới hạn bởi 1 đồ thị và trục hoành.",
            },
            {
              part: 1, type: "v1",
              q: "Khẳng định nào sau đây đúng về diện tích $S$ của hình phẳng trong hình vẽ? <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau11.png'></div>",
              a: [
                "$\\displaystyle S = \\int_a^b [f_2(x)-f_1(x)] dx$",
                "$\\displaystyle S = \\int_a^b [f_1(x)-f_2(x)] dx$",
                "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)]^2 dx$",
                "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)] dx$"
              ],
              c: 1,
              sol: "Trên đoạn $[a;b]$, đồ thị hàm số $y=f_1(x)$ nằm phía trên đồ thị $y=f_2(x)$ nên $S = \\int_a^b |f_1(x)-f_2(x)| dx = \\int_a^b [f_1(x)-f_2(x)] dx$.",
            },
            {
              part: 1, type: "v1",
              q: "Thể tích vật thể giới hạn bởi hai mặt phẳng $x=a, x=b$ ($a < b$) có thiết diện tại $x$ là $S(x)$ được tính bởi:",
              a: ["$\\displaystyle V = \\int_b^a S(x)dx$", "$\\displaystyle V = \\pi \\int_a^b S(x)dx$", "$V = \\pi \\int_a^b S(x)^2dx$", "$\\displaystyle \\int_a^b S(x)dx$"],
              c: 3,
              sol: "Công thức tính thể tích vật thể theo thiết diện $S(x)$ không có hằng số $\\pi$.",
            },
            // PHẦN II (4 câu)
            {
              part: 2, num: 1, type: "v2",
              q: "Cho hàm số $f(x) = \\dfrac{x^2+1}{x}$ xác định trên $(0;+\\infty)$. Gọi $F(x)$ là một nguyên hàm của $f(x)$ trên khoảng đó.",
              items: [
                { l: "$F(x) = f'(x)$", r: false },
                { l: "$F(x)+2025$ cũng là một nguyên hàm của $f(x)$", r: true },
                { l: "Một nguyên hàm của $f(x)$ là $F(x) = x^2 + \\ln x + 2025$", r: false },
                { l: "Nếu $F(1) = 1,5$ thì $F(x) = 0,5x^2 + \\ln x + 1$", r: true }
              ],
              sol: "a) Sai vì $F'(x)=f(x)$. b) Đúng vì nguyên hàm sai khác hằng số C. c) Sai vì $\\int x dx = x^2/2$. d) Đúng vì $F(1)=0,5(1)^2+\\ln 1 + 1 = 1,5$.",
            },
            {
              part: 2, num: 2, type: "v2",
              q: "Cho hàm số $f(x) = 6x^5 - x^e$. Gọi $\\displaystyle I = \\int_a^b 6x^5 dx$ và $\\displaystyle J = \\int_a^b x^e dx$. Xét tính đúng–sai của các khẳng định sau:",
              items: [
                { l: "Gọi $\\displaystyle A = \\int_a^b x^5 dx$ thì ta có $A = 6I$", r: false },
                { l: "$\\displaystyle \\int_a^b f(x) dx = I + J$", r: false },
                { l: "$\\displaystyle J = x^e \\big|_a^b = b^e - a^e$", r: false },
                { l: "$\\displaystyle \\int_0^1 f(x) dx = m - \\frac{n}{e+p}$. Khi đó $m+n+p=3$", r: true }
              ],
              sol: "<b>Giải chi tiết:</b><br>a) <b>Sai.</b> Vì $I = 6 \\int_a^b x^5 dx = 6A$, suy ra $A = I/6$.<br>b) <b>Sai.</b> Vì $f(x) = 6x^5 - x^e$ nên $\\int f(x)dx = I - J$.<br>c) <b>Sai.</b> Vì $\\int x^e dx = \\frac{x^{e+1}}{e+1} + C$. Công thức đúng phải là $J = \\frac{b^{e+1}-a^{e+1}}{e+1}$.<br>d) <b>Đúng.</b> Ta có $\\int_0^1 (6x^5 - x^e)dx = (x^6 - \\frac{x^{e+1}}{e+1})\\big|_0^1 = 1 - \\frac{1}{e+1}$. Đồng nhất với $m - \\frac{n}{e+p}$ ta được $m=1, n=1, p=1 \\Rightarrow m+n+p=3$.",
            },
            {
              part: 2, num: 3, type: "v2",
              q: "Cho hàm số $\\displaystyle f(x) = x + 5 - \\dfrac{6}{x}$ xác định trên $\\mathbb{R}\\backslash\\{0\\}$.",
              items: [
                { l: "Đạo hàm của hàm số là $f'(x) = 1 + \\dfrac{6}{x^2}$", r: true },
                { l: "$\\displaystyle \\int f(x)dx = 0,5x^2 + 5x - 6\\ln|x| + C$", r: true },
                { l: "Với mọi $F(x)$ là nguyên hàm của $f(x)$, ta có $F(2) - F(1) = \\int_1^2 f(x)dx$", r: true },
                { l: "Nếu $G(x)$ là nguyên hàm thỏa $G(-2)=0$ thì $G(-6) = -13 - 6\\ln 3$", r: true }
              ],
              sol: "Tất cả các ý đều đúng dựa trên quy tắc tính đạo hàm, nguyên hàm cơ bản và định lý Newton-Leibniz.",
            },
            {
              part: 2, num: 4, type: "v2",
              q: "Cho bảng biến thiên của hàm số $y=f'(x)$ như hình vẽ: <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau4_ds.png'></div>",
              items: [
                { l: "$\\displaystyle \\int_2^5 f'(x)dx = f(5)-f(2)$", r: true },
                { l: "$f'(x) < 0$ trên khoảng $(2;3)$", r: true },
                { l: "Hàm số $y=f(x)$ đồng biến trên khoảng $(3;5)$", r: true },
                { l: "Giá trị $f(2) > f(3)$", r: true }
              ],
              sol: "a) Đúng (định lý). b) Đúng (nhìn BBT đoạn [2;3] nằm dưới trục hoành). c) Đúng (đoạn [3;5] $f'(x)>0$). d) Đúng vì hàm nghịch biến trên $(2;3)$.",
            },
            // PHẦN III (6 câu)
            {
              part: 3, num: 1, type: "v3",
              q: "Biết $\\displaystyle \\int (\\sin x - \\cos x)^2 dx = x + \\dfrac{1}{a} \\cos bx + C$. Tính giá trị $a+b$.",
              c: "4",
              sol: "Khai triển: $(\\sin x - \\cos x)^2 = 1 - 2\\sin x \\cos x = 1 - \\sin 2x$. <br> Nguyên hàm: $\\int (1-\\sin 2x)dx = x + \\frac{1}{2}\\cos 2x + C$. <br> Suy ra $a=2, b=2 \\Rightarrow a+b=4$.",
            },
            {
              part: 3, num: 2, type: "v3",
              q: "Cho hàm số $f(x), g(x)$ liên tục. Biết $\\int_2^7 [2f(x)+3g(x)]dx=2$ và $\\int_2^7 [f(x)-2g(x)]dx=4$. Tính $\\int_2^7 [f(x)-g(x)]dx$ (làm tròn đến 2 chữ số thập phân).",
              c: "3.14",
              sol: "Đặt $u = \\int_2^7 f(x)dx, v = \\int_2^7 g(x)dx$. <br> Ta có hệ: $2u+3v=2$ và $u-2v=4$. Giải hệ được $u=16/7, v=-6/7$. <br> Khi đó $u-v = 16/7 - (-6/7) = 22/7 \\approx 3.14$.",
            },
            {
              part: 3, num: 3, type: "v3",
              q: "Cho $F(x) = (ax^2+bx+c)e^x$ là một nguyên hàm của hàm số $f(x) = (x^2+1)e^x$. Tính tổng $a+b+c$.",
              c: "2",
              sol: "Đạo hàm $F'(x) = [ax^2 + (2a+b)x + (b+c)]e^x$. <br> Đồng nhất hệ số với $(x^2+1)e^x$: $a=1; 2a+b=0; b+c=1$. <br> Giải ra $a=1, b=-2, c=3 \\Rightarrow a+b+c=2$.",
            },
            {
              part: 3, num: 4, type: "v3",
              q: "Cho hàm số $f(x) = 3x^2-x-9$ khi $x \\ge 2$ và $f(x) = x-1$ khi $x < 2$. Tính tích phân $I = \\displaystyle \\int_0^3 f(x)dx$.",
              c: "7.5",
              sol: "Tách tích phân: $I = \\int_0^2 (x-1)dx + \\int_2^3 (3x^2-x-9)dx$. <br> $I = (x^2/2 - x)|_0^2 + (x^3 - x^2/2 - 9x)|_2^3 = 0 + 7,5 = 7,5$.",
            },
            {
              part: 3, num: 5, type: "v3",
              q: "Tính giá trị $f(3)$ biết diện tích các hình phẳng $S_A=4, S_B=10$ và $f(0)=2$ dựa trên đồ thị hàm số đạo hàm $f'(x)$ như hình vẽ: <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau5_kq.png'></div>",
              c: "-4",
              sol: "Ta có $\\int_0^3 f'(x)dx = f(3)-f(0)$. <br> Mặt khác $\\int_0^3 f'(x)dx = S_A - S_B = 4 - 10 = -6$. <br> Suy ra $f(3) = f(0) - 6 = 2 - 6 = -4$.",
            },
            {
              part: 3, num: 6, type: "v3",
              q: "Một khuôn viên hình nửa đường tròn giới hạn bởi $y=x^2$ và $y=\\sqrt{20-x^2}$. Tính chi phí trồng hoa với giá 250 (ngàn đồng/$m^2$), làm tròn đến hàng đơn vị. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau6_kq.png'></div>",
              c: "4985",
              sol: "<div class='img-container' style='margin-bottom:15px;'><img src='images/12/nguyen_ham_tich_phan/de1/cau6_kq_lg.png' style='max-width:100%; border: 1px solid #30363d; border-radius:8px;'></div><b>Giải chi tiết:</b><br>1. Phương trình hoành độ giao điểm: $x^2 = \\sqrt{20-x^2} \\Leftrightarrow x^4 + x^2 - 20 = 0 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$.<br>2. Diện tích hình phẳng: $\\displaystyle S = \\int_{-2}^2 \\left( \\sqrt{20-x^2} - x^2 \\right) dx \\approx 19.9396 m^2$.<br>3. Tổng chi phí: $19.9396 \\cdot 250 \\approx 4985$ (ngàn đồng).",
            },
          ]
        },
        {
          title: "Đề 02",
          questions: [
            // PHẦN I: TRẮC NGHIỆM (12 CÂU)
            {
              part: 1, type: "v1",
              q: "Cho hàm số $f(x)$ liên tục trên đoạn $[1;2]$ và $\\displaystyle\\int_1^2 (4f(x)-2x)dx = 1$. Tính tích phân $\\displaystyle\\int_1^2 f(x)dx$.",
              a: ["$1$", "$-1$", "$-3$", "$3$"], c: 0,
              sol: "Áp dụng tính chất tuyến tính của tích phân, ta có: $\\displaystyle\\int_1^2 (4f(x)-2x)dx = \\displaystyle\\int_1^2 4f(x)dx - \\displaystyle\\int_1^2 2x dx = 1 \\Rightarrow 4 \\displaystyle\\int_1^2 f(x)dx - [x^2]_1^2 = 1 \\Rightarrow 4 \\displaystyle\\int_1^2 f(x)dx - 3 = 1 \\Rightarrow \\displaystyle\\int_1^2 f(x)dx = 1$."
            },
            {
              part: 1, type: "v1",
              q: "Biết tích phân $\\displaystyle\\int_{\\frac{\\pi}{4}}^{\\frac{2\\pi}{3}} \\frac{3}{\\sin^2 x} dx = a+b\\sqrt{3}$ ($a,b \\in \\mathbb{Z}$). Tính $a^2+b^2$.",
              a: ["$10$", "$4$", "$\\dfrac{9}{2}$", "$2$"], c: 0,
              sol: "Ta có nguyên hàm của $\\frac{1}{\\sin^2 x}$ là $-\\cot x$. $I = 3 [-\\cot x]_{\\pi/4}^{2\\pi/3} = -3 (\\cot(2\\pi/3) - \\cot(\\pi/4)) = -3 (-1/\\sqrt{3} - 1) = \\sqrt{3} + 3$. Suy ra $a=3, b=1 \\Rightarrow a^2+b^2=10$."
            },
            {
              part: 1, type: "v1",
              q: "Họ các nguyên hàm của hàm số $f(x)=3 x^2-4 x$ là?",
              a: ["$F(x)=6 x-4+C$", "$F(x)=x^3+2 x^2+C$", "$F(x)=x^3-2 x^2+C$", "$F(x)=x^3-4+C$"], c: 2,
              sol: "$\\int (3x^2 - 4x) dx = 3(x^3/3) - 4(x^2/2) + C = x^3 - 2x^2 + C$."
            },
            {
              part: 1, type: "v1",
              q: "Cho hình phẳng $D$ giới hạn bởi $y=\\sqrt{2+\\sin x}$, trục hoành, $x=0, x=\\pi$. Quay $D$ quanh $Ox$ có thể tích $V$ bằng:",
              a: ["$V=2 \\pi(\\pi+1)$", "$V=2(\\pi+1)$", "$V=2 \\pi$", "$V=2 \\pi^2$"], c: 0,
              sol: "$V = \\pi \\int_0^\\pi (2+\\sin x) dx = \\pi [2x - \\cos x]_0^\\pi = \\pi (2\\pi+1 - (-1)) = 2\\pi(\\pi+1)$."
            },
            {
              part: 1, type: "v1",
              q: "Tìm nguyên hàm $F(x)$ của $f(x)=2x-e^x$ biết $F(0)=-2$.",
              a: ["$F(x)=x-e^x+1$", "$F(x)=x^2-e^x-1$", "$F(x)=x^2-e^x-2$", "$F(x)=x^2-e^x+1$"], c: 1,
              sol: "$F(x) = x^2-e^x+C$. $F(0) = -1+C=-2 \\Rightarrow C=-1$. Vậy $F(x)=x^2-e^x-1$."
            },
            {
              part: 1, type: "v1",
              q: "Biết $2F(a)-7=2F(b)$. Tính tích phân $I=\\displaystyle\\int_a^b f(x)dx$.",
              a: ["$I=-2$", "$I=7/2$", "$I=-7/2$", "$I=2$"], c: 2,
              sol: "$I = F(b)-F(a)$. Từ giả thiết $2(F(a)-F(b))=7 \\Rightarrow F(a)-F(b)=7/2 \\Rightarrow I = -7/2$."
            },
            {
              part: 1, type: "v1",
              q: "Cho đồ thị $y=f(x)$ như hình vẽ, diện tích $A=11, B=2$. Tính $\\int_{-2}^1 f(x)dx$. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau7.png'></div>",
              a: ["13", "-9", "-13", "9"], c: 3,
              sol: "$\\int_{-2}^1 f(x)dx = S_A - S_B = 11 - 2 = 9$."
            },
            {
              part: 1, type: "v1",
              q: "Gọi $S$ là diện tích hình phẳng giới hạn bởi $y=4^x, y=0, x=-1, x=2$. Khẳng định đúng:",
              a: ["$S=\\int_{-1}^2 4^x dx$", "$S=\\pi \\int_{-1}^2 4^x dx$", "$S=\\int_0^{-1} 4^{2x} dx$", "$S=\\int_2^{-1} 4^x dx$"], c: 0,
              sol: "Vì $4^x > 0$ nên $S = \\int_{-1}^2 |4^x| dx = \\int_{-1}^2 4^x dx$."
            },
            {
              part: 1, type: "v1",
              q: "Biết $\\int_1^2 (2^x+x^2)dx = a/\\ln 2 + b/3$. Tính $a+b$.",
              a: ["9", "8", "10", "7"], c: 0,
              sol: "$I = [2^x/\\ln 2 + x^3/3]_1^2 = 2/\\ln 2 + 7/3 \\Rightarrow a=2, b=7 \\Rightarrow a+b=9$."
            },
            {
              part: 1, type: "v1",
              q: "Công thức mô tả diện tích phần gạch chéo trong hình vẽ? <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau10.png'></div>",
              a: ["$\\int_{-1}^2 (2x^2-2x-4)dx$", "$S=\\int_{-1}^2 (-2x^2+2x+4)dx$", "$\\int_{-1}^2 (-2x+2)dx$", "$\\pi \\int$"], c: 1,
              sol: "Giao điểm $x=-1, x=2$. $S = \\int_{-1}^2 [(-x^2+3)-(x^2-2x-1)]dx = \\int_{-1}^2 (-2x^2+2x+4)dx$."
            },
            {
              part: 1, type: "v1",
              q: "Thể tích vật thể từ $x=0$ đến $x=1$ có thiết diện tam giác đều cạnh $x\\sqrt{8-x^2}$.",
              a: ["$37\\sqrt{3}/15$", "$37\\sqrt{3}/60$", "$37\\sqrt{3}/30$", "$39\\sqrt{3}/60$"], c: 1,
              sol: "$S(x) = (cạnh^2\\sqrt{3})/4 = (x^2(8-x^2)\\sqrt{3})/4$. $V = \\int_0^1 S(x)dx = 37\\sqrt{3}/60$."
            },
            {
              part: 1, type: "v1",
              q: "Thể tích khối tròn xoay giới hạn bởi $y=\\sqrt{9x+7}, y=0, x=2, x=7$ quanh $Ox$.",
              a: ["$312\\pi$", "$475\\pi/2$", "$531\\pi/2$", "475/2"], c: 1,
              sol: "$V = \\pi \\int_2^7 (9x+7)dx = \\pi [9x^2/2 + 7x]_2^7 = 475\\pi/2$."
            },
            // PHẦN II (4 câu)
            {
              part: 2, num: 1, type: "v2",
              q: "Biết $f(x)=ax^2+bx+c$ thỏa $\\int_0^1 f = -7/2, \\int_0^2 f = -2$. $F(x)$ là nguyên hàm.",
              items: [
                { l: "$F(1)-F(0)=-7/2$", r: true },
                { l: "$\\int_1^2 f = 3/2$", r: true },
                { l: "$\\int f(x)dx = ax^3/3 + bx^2/2 + cx$", r: false },
                { l: "Nếu $\\int_0^3 f = 13/2$ thì $a+b+3c=-12$", r: true }
              ],
              sol: "a) Đúng (định lý). b) Đúng vì $\\int_0^2 = \\int_0^1 + \\int_1^2$. c) Sai vì thiếu hằng số C. d) Đúng (giải hệ tìm được $a=1, b=3, c=-16/3$)."
            },
            {
              part: 2, num: 2, type: "v2",
              q: "Cho hàm số $f(x)=2x+1$. Xét tính đúng–sai:",
              items: [
                { l: "$\\int f(x)dx = x^2+x+C$", r: true },
                { l: "$\\int_0^1 [(x-1)f(x)]dx = 2/3$", r: false },
                { l: "Nếu $G(2)=5$ thì $G(x)=x^2+x-1$", r: true },
                { l: "Biết $F(1)=2$ thì $\\frac{1}{F(1)}+\\dots+\\frac{1}{F(100)} = \\frac{100}{101}$", r: true }
              ],
              sol: "b) Tính ra $-5/6$. d) $F(x)=x^2+x=x(x+1)$, tổng sai phân bằng $1-1/101=100/101$."
            },
            {
              part: 2, num: 3, type: "v2",
              q: "Cho $f(x)=2x-3\\cos x$. Xét tính đúng–sai:",
              items: [
                { l: "Một nguyên hàm là $g(x)=x^2+3\\sin x+2$", r: false },
                { l: "Nếu $F(\\pi/2)=3$ thì $F(x)=x^2-3\\sin x+6$", r: false },
                { l: "Nguyên hàm thỏa $F(0)=0$ là $F(x)=x^2-3\\sin x$", r: true },
                { l: "$\\int f(x+\\pi)dx = x^2+3\\sin x + 2(\\pi x+C)$", r: true }
              ],
              sol: "a) Đạo hàm g(x) ra $2x+3\\cos x$. b) $C=6-\\pi^2/4$. d) $f(x+\\pi) = 2x+2\\pi+3\\cos x$, nguyên hàm đúng."
            },
            {
              part: 2, num: 4, type: "v2",
              q: "Cho đồ thị $y=f(x)=x+1$ và $y=g(x)=0.7^x$. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau4_ds.png'></div>",
              items: [
                { l: "$\\int_{-1}^0 f(x)dx = 1/2$", r: true },
                { l: "$V$ quay từ $x=-1, x=0$ của $f(x)$ là $9\\pi$", r: false },
                { l: "$V$ quay từ $x=0, x=2$ của $g(x)$ xấp xỉ 7.9", r: false },
                { l: "$V$ phần giới hạn bởi $f, g$ xấp xỉ 4.4", r: true }
              ],
              sol: "b) $V=\\pi/3$. c) $V \\approx 3.35$. d) Tổng thể tích hai miền cắt tại $x=0$ là $4.4$."
            },
            // PHẦN III (6 câu)
            {
              part: 3, num: 1, type: "v3",
              q: "Tính diện tích hình phẳng giới hạn bởi $y=-x^2+2x+1$ và $y=2x^2-4x+1$.",
              c: "4",
              sol: "Giao điểm $x=0, x=2$. $S = \\int_0^2 [(-x^2+2x+1)-(2x^2-4x+1)]dx = \\int_0^2 (-3x^2+6x)dx = 4$."
            },
            {
              part: 3, num: 2, type: "v3",
              q: "Tính thể tích $V$ tròn xoay giới hạn bởi $y=\\sqrt{x}, y=0, x=4$ quanh $Ox$ (làm tròn 0.1).",
              c: "25.1",
              sol: "$V = \\pi \\int_0^4 x dx = 8\\pi \\approx 25.1$."
            },
            {
              part: 3, num: 3, type: "v3",
              q: "Họ nguyên hàm của $f(x)=3x^2+2x+5$ là $F(x)=ax^3+bx^2+5x+C$. Tính $a+b$.",
              c: "2",
              sol: "$F(x)=x^3+x^2+5x+C \\Rightarrow a=1, b=1 \\Rightarrow a+b=2$."
            },
            {
              part: 3, num: 4, type: "v3",
              q: "Diện tích mảnh đất hình thang cong có thông số như hình vẽ (làm tròn 0.1). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau4_kq.png'></div>",
              c: "50.7",
              sol: "PT đường cong $y=2\\sqrt{x}$. $S = \\int_4^9 4\\sqrt{x}dx = 152/3 \\approx 50.7$."
            },
            {
              part: 3, num: 5, type: "v3",
              q: "Tổng chi phí làm cổng Parabol cao 4m, rộng 4m... (triệu đồng, làm tròn 0.1). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau5_kq.png'></div>",
              c: "11.4",
              sol: "$S_{total}=32/3$. $S_{gate}=6.138$. Tiền = $6.138 \\times 1.2 + (32/3-6.138) \\times 0.9 \\approx 11.4$."
            },
            {
              part: 3, num: 6, type: "v3",
              q: "Cổng chào Parabol 18m, rộng 12m. Chia 3 phần bằng nhau. Tính tỷ số $AB/CD$ (làm tròn 0.1). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau6_kq.png'></div>",
              c: "0.8",
              sol: "$x_2^3 = 2x_1^3 \\Rightarrow x_1/x_2 = 1/\\sqrt[3]{2} \\approx 0.8$."
            }
          ]
        }
      ]
    },
    {
      topic: "Hình học Oxyz",
      exams: [
        { title: "Đề 01", questions: [] },
        { title: "Đề 02", questions: [] }
      ]
    }
  ],
  11: [],
  10: []
};
