// File: data.js
const examDatabase = {
  12: [
    {
      topic: "Nguyên hàm - Tích phân",  
      exams: [
        {
          title: "Đề 01: Nguyên hàm - Tích phân",
          questions: [
            // PHẦN I (12 câu)
            {
              part: 1,
              type: "v1",
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
              part: 1,
              type: "v1",
              q: "Nguyên hàm của hàm số $f(x) = \\cos x$ là:",
              a: [
                "$-\\sin x + C$",
                "$\\sin x + C$",
                "$\\cos x + C$",
                "$-\\cos x + C$",
              ],
              c: 1,
              sol: "Vì $\\displaystyle (\\sin x + C)' = \\cos x$ nên $\\displaystyle \\int \\cos x dx = \\sin x + C$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Tìm họ nguyên hàm của hàm số $f(x) = 5^x$.",
              a: [
                "$5^x + C$",
                "$5^x \\ln 5 + C$",
                "$\\displaystyle \\dfrac{5^x}{\\ln 5} + C$",
                "$\\displaystyle \\dfrac{5^{x+1}}{x+1} + C$",
              ],
              c: 2,
              sol: "Áp dụng công thức nguyên hàm hàm số mũ: $\\displaystyle \\int a^x dx = \\dfrac{a^x}{\\ln a} + C$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Cho hàm số $f(x)$ liên tục trên $K$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $K$. Khẳng định nào sau đây đúng?",
              a: [
                "$f'(x) = F(x)$",
                "$F'(x) = f(x)$",
                "$F(x) = f(x)$",
                "$F'(x) = f'(x)$",
              ],
              c: 1,
              sol: "Theo định nghĩa nguyên hàm: Hàm số $F(x)$ được gọi là nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Tìm họ nguyên hàm của hàm số $f(x) = \\dfrac{1}{x^2}$.",
              a: [
                "$\\displaystyle \\dfrac{1}{x} + C$",
                "$\\displaystyle -\\dfrac{1}{x} + C$",
                "$\\displaystyle \\dfrac{1}{2x} + C$",
                "$\\ln x^2 + C$",
              ],
              c: 1,
              sol: "Ta có $\\displaystyle \\int \\dfrac{1}{x^2} dx = \\int x^{-2} dx = \\dfrac{x^{-1}}{-1} + C = -\\dfrac{1}{x} + C$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Họ nguyên hàm của hàm số $f(x) = x^2 - 3x + \\dfrac{1}{x}$ là:",
              a: [
                "$F(x) = 2x - 3 - 1/x^2 + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln|x| + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} + \\frac{3}{2}x^2 + \\ln x + C$",
                "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln x + C$",
              ],
              c: 1,
              sol: "Lấy nguyên hàm từng số hạng: $\\displaystyle \\int x^2 dx = x^3/3$; $\\int -3x dx = -3x^2/2$; $\\int (1/x) dx = \\ln|x|$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Cho $a, b, c \\in K$ và hàm số $f(x)$ liên tục trên $K$. Mệnh đề nào sau đây <b>sai</b>?",
              a: [
                "$\\displaystyle \\int_a^b f(x)dx + \\int_c^b f(x)dx = \\int_a^c f(x)dx$",
                "$\\displaystyle \\int_a^b f(x)dx = \\int_a^b f(t)dt$",
                "$\\displaystyle \\int_a^b f(x)dx = -\\int_b^a f(x)dx$",
                "$\\displaystyle \\int_a^a f(x)dx = 0$",
              ],
              c: 0,
              sol: "Tính chất nối cận đúng phải là: $\\displaystyle \\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)$. Hiệu số $F(0)-F(1)$ bằng:",
              a: [
                "$\\displaystyle \\int_0^1 f(x)dx$",
                "$\\displaystyle \\int_0^1 F(x)dx$",
                "$\\displaystyle \\int_1^0 F(x)dx$",
                "$\\displaystyle \\int_1^0 f(x)dx$",
              ],
              c: 3,
              sol: "Theo công thức Newton-Leibniz: $\\displaystyle \\int_1^0 f(x)dx = F(0) - F(1)$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Cho $f(1)=2, f(3)=9$. Tính tích phân $I = \\displaystyle \\int_1^3 f'(x)dx$.",
              a: ["11", "7", "2", "18"],
              c: 1,
              sol: "Ta có $\\displaystyle I = f(x) \\big|_1^3 = f(3) - f(1) = 9 - 2 = 7$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$ liên tục, trục hoành và hai đường thẳng $x=a, x=b$ ($a < b$) là:",
              a: [
                "$S=\\displaystyle \\pi \\int_a^b f^2(x)dx$",
                "$S=\\displaystyle \\int_a^b f(x)dx$",
                "$S=\\displaystyle \\pi \\int_a^b |f(x)|dx$",
                "$S=\\displaystyle \\int_a^b |f(x)|dx$",
              ],
              c: 3,
              sol: "Đây là công thức cơ bản tính diện tích hình phẳng giới hạn bởi 1 đồ thị và trục hoành.",
            },
            {
              part: 1,
              type: "v1",
              q: "Khẳng định nào sau đây đúng về diện tích $S$ của hình phẳng trong hình vẽ? <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau11.png'></div>",
              a: [
                "$\\displaystyle S = \\int_a^b [f_2(x)-f_1(x)] dx$",
                "$\\displaystyle S = \\int_a^b [f_1(x)-f_2(x)] dx$",
                "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)]^2 dx$",
                "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)] dx$",
              ],
              c: 1,
              sol: "Trên đoạn $[a;b]$, đồ thị hàm số $y=f_1(x)$ nằm phía trên đồ thị $y=f_2(x)$ nên $S = \\int_a^b |f_1(x)-f_2(x)| dx = \\int_a^b [f_1(x)-f_2(x)] dx$.",
            },
            {
              part: 1,
              type: "v1",
              q: "Thể tích vật thể giới hạn bởi hai mặt phẳng $x=a, x=b$ ($a < b$) có thiết diện tại $x$ là $S(x)$ được tính bởi:",
              a: [
                "$\\displaystyle V = \\int_b^a S(x)dx$",
                "$\\displaystyle V = \\pi \\int_a^b S(x)dx$",
                "$V = \\pi \\int_a^b S(x)^2dx$",
                "$\\displaystyle \\int_a^b S(x)dx$",
              ],
              c: 3,
              sol: "Công thức tính thể tích vật thể theo thiết diện $S(x)$ không có hằng số $\\pi$.",
            },

            // PHẦN II (4 câu)
            {
              part: 2,
              num: 1,
              type: "v2",
              q: "Cho hàm số $f(x) = \\dfrac{x^2+1}{x}$ xác định trên $(0;+\\infty)$. Gọi $F(x)$ là một nguyên hàm của $f(x)$ trên khoảng đó.",
              items: [
                { l: "$F(x) = f'(x)$", r: false },
                {
                  l: "$F(x)+2025$ cũng là một nguyên hàm của $f(x)$",
                  r: true,
                },
                {
                  l: "Một nguyên hàm của $f(x)$ là $F(x) = x^2 + \\ln x + 2025$",
                  r: false,
                },
                {
                  l: "Nếu $F(1) = 1,5$ thì $F(x) = 0,5x^2 + \\ln x + 1$",
                  r: true,
                },
              ],
              sol: "a) Sai vì $F'(x)=f(x)$. b) Đúng vì nguyên hàm sai khác hằng số C. c) Sai vì $\\int x dx = x^2/2$. d) Đúng vì $F(1)=0,5(1)^2+\\ln 1 + 1 = 1,5$.",
            },
            {
              part: 2,
              num: 2,
              type: "v2",
              q: "Cho hàm số $f(x) = 6x^5 - x^e$. Gọi $\\displaystyle I = \\int_a^b 6x^5 dx$ và $\\displaystyle J = \\int_a^b x^e dx$.",
              items: [
                {
                  l: "$\\displaystyle \\int 6x^5 dx = 6 \\int x^5 dx$",
                  r: true,
                },
                { l: "$\\displaystyle \\int f(x) dx = I + J$", r: false },
                {
                  l: "$\\displaystyle J = \\frac{b^{e+1}-a^{e+1}}{e+1}$",
                  r: true,
                },
                {
                  l: "$\\displaystyle \\int_0^1 f(x)dx = 1 - \\frac{1}{e+1}$",
                  r: true,
                },
              ],
              sol: "a) Đúng (tính chất nguyên hàm). b) Sai (đề bài cho $f(x)$ là hiệu). c) Đúng (công thức tích phân lũy thừa). d) Đúng vì $\\int_0^1 (6x^5-x^e)dx = (x^6 - x^{e+1}/(e+1))|_0^1 = 1 - 1/(e+1)$.",
            },
            {
              part: 2,
              num: 3,
              type: "v2",
              q: "Cho hàm số $\\displaystyle f(x) = x + 5 - \\dfrac{6}{x}$ xác định trên $\\mathbb{R}\\backslash\\{0\\}$.",
              items: [
                {
                  l: "Đạo hàm của hàm số là $f'(x) = 1 + \\dfrac{6}{x^2}$",
                  r: true,
                },
                {
                  l: "$\\displaystyle \\int f(x)dx = 0,5x^2 + 5x - 6\\ln|x| + C$",
                  r: true,
                },
                {
                  l: "Với mọi $F(x)$ là nguyên hàm của $f(x)$, ta có $F(2) - F(1) = \\int_1^2 f(x)dx$",
                  r: true,
                },
                {
                  l: "Nếu $G(x)$ là nguyên hàm thỏa $G(-2)=0$ thì $G(-6) = -13 - 6\\ln 3$",
                  r: true,
                },
              ],
              sol: "Tất cả các ý đều đúng dựa trên quy tắc tính đạo hàm, nguyên hàm cơ bản và định lý Newton-Leibniz.",
            },
            {
              part: 2,
              num: 4,
              type: "v2",
              q: "Cho bảng biến thiên của hàm số $y=f'(x)$ như hình vẽ: <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau4_ds.png'></div>",
              items: [
                {
                  l: "$\\displaystyle \\int_2^5 f'(x)dx = f(5)-f(2)$",
                  r: true,
                },
                { l: "$f'(x) < 0$ trên khoảng $(2;3)$", r: true },
                {
                  l: "Hàm số $y=f(x)$ đồng biến trên khoảng $(3;5)$",
                  r: true,
                },
                { l: "Giá trị $f(2) > f(3)$", r: true },
              ],
              sol: "a) Đúng (định lý). b) Đúng (nhìn BBT đoạn [2;3] nằm dưới trục hoành). c) Đúng (đoạn [3;5] $f'(x)>0$). d) Đúng vì hàm nghịch biến trên $(2;3)$. ",
            },

            // PHẦN III (6 câu)
            {
              part: 3,
              num: 1,
              type: "v3",
              q: "Biết $\\displaystyle \\int (\\sin x - \\cos x)^2 dx = x + \\dfrac{1}{a} \\cos bx + C$. Tính giá trị $a+b$.",
              c: "4",
              sol: "Khai triển: $(\\sin x - \\cos x)^2 = 1 - 2\\sin x \\cos x = 1 - \\sin 2x$. <br> Nguyên hàm: $\\int (1-\\sin 2x)dx = x + \\frac{1}{2}\\cos 2x + C$. <br> Suy ra $a=2, b=2 \\Rightarrow a+b=4$.",
            },
            {
              part: 3,
              num: 2,
              type: "v3",
              q: "Cho hàm số $f(x), g(x)$ liên tục. Biết $\\int_2^7 [2f(x)+3g(x)]dx=2$ và $\\int_2^7 [f(x)-2g(x)]dx=4$. Tính $\\int_2^7 [f(x)-g(x)]dx$ (làm tròn đến 2 chữ số thập phân).",
              c: "3.14",
              sol: "Đặt $u = \\int_2^7 f(x)dx, v = \\int_2^7 g(x)dx$. <br> Ta có hệ: $2u+3v=2$ và $u-2v=4$. Giải hệ được $u=16/7, v=-6/7$. <br> Khi đó $u-v = 16/7 - (-6/7) = 22/7 \\approx 3.14$.",
            },
            {
              part: 3,
              num: 3,
              type: "v3",
              q: "Cho $F(x) = (ax^2+bx+c)e^x$ là một nguyên hàm của hàm số $f(x) = (x^2+1)e^x$. Tính tổng $a+b+c$.",
              c: "2",
              sol: "Đạo hàm $F'(x) = [ax^2 + (2a+b)x + (b+c)]e^x$. <br> Đồng nhất hệ số với $(x^2+1)e^x$: $a=1; 2a+b=0; b+c=1$. <br> Giải ra $a=1, b=-2, c=3 \\Rightarrow a+b+c=2$.",
            },
            {
              part: 3,
              num: 4,
              type: "v3",
              q: "Cho hàm số $f(x) = 3x^2-x-9$ khi $x \\ge 2$ và $f(x) = x-1$ khi $x < 2$. Tính tích phân $I = \\displaystyle \\int_0^3 f(x)dx$.",
              c: "7.5",
              sol: "Tách tích phân: $I = \\int_0^2 (x-1)dx + \\int_2^3 (3x^2-x-9)dx$. <br> $I = (x^2/2 - x)|_0^2 + (x^3 - x^2/2 - 9x)|_2^3 = 0 + 7,5 = 7,5$.",
            },
            {
              part: 3,
              num: 5,
              type: "v3",
              q: "Tính giá trị $f(3)$ biết diện tích các hình phẳng $S_A=4, S_B=10$ và $f(0)=2$ dựa trên đồ thị hàm số đạo hàm $f'(x)$ như hình vẽ: <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau5_kq.png'></div>",
              c: "-4",
              sol: "Ta có $\\int_0^3 f'(x)dx = f(3)-f(0)$. <br> Mặt khác $\\int_0^3 f'(x)dx = S_A - S_B = 4 - 10 = -6$. <br> Suy ra $f(3) = f(0) - 6 = 2 - 6 = -4$.",
            },
            {
              part: 3,
              num: 6,
              type: "v3",
              q: "Một khuôn viên hình nửa đường tròn giới hạn bởi $y=x^2$ và $y=\\sqrt{20-x^2}$. Tính chi phí trồng hoa với giá 250 (ngàn đồng/$m^2$), làm tròn đến hàng đơn vị. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau6_kq.png'></div>",
              c: "4985",
              sol:
                "<div class='img-container' style='margin-bottom:15px;'>" +
                "<img src='images/12/nguyen_ham_tich_phan/de1/cau6_kq_lg.png' style='max-width:100%; border: 1px solid #30363d; border-radius:8px;'>" +
                "</div>" +
                "<b>Giải chi tiết:</b><br>" +
                "1. Phương trình hoành độ giao điểm: $x^2 = \\sqrt{20-x^2} \\Leftrightarrow x^4 + x^2 - 20 = 0 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$.<br>" +
                "2. Diện tích hình phẳng: $\\displaystyle S = \\int_{-2}^2 \\left( \\sqrt{20-x^2} - x^2 \\right) dx \\approx 19.9396 m^2$.<br>" +
                "3. Tổng chi phí: $19.9396 \\cdot 250 \\approx 4985$ (ngàn đồng).",
            },
          ],
        },
        { title: "Đề 02: Ứng dụng tích phân", questions: [
            // PHẦN I: TRẮC NGHIỆM (12 CÂU)
            {
              part: 1, type: "v1",
              q: "Cho hàm số $f(x)$ liên tục trên đoạn $[1;2]$ và $\\displaystyle\\int_1^2 (4f(x)-2x)dx = 1$. Tính tích phân $\\displaystyle\\int_1^2 f(x)dx$.",
              a: ["$1$", "$-1$", "$-3$", "$3$"], c: 0,
              sol: "Áp dụng tính chất tuyến tính của tích phân, ta có: $\\displaystyle\\int_1^2 (4f(x)-2x)dx = \\displaystyle\\int_1^2 4f(x)dx - \\displaystyle\\int_1^2 2x dx = 1$. Suy ra $4 \\displaystyle\\int_1^2 f(x)dx - \\left[ x^2 \\right]_1^2 = 1 \\Rightarrow 4 \\displaystyle\\int_1^2 f(x)dx - 3 = 1 \\Rightarrow \\displaystyle\\int_1^2 f(x)dx = 1$."
            },
            {
              part: 1, type: "v1",
              q: "Biết tích phân $\\displaystyle\\int_{\\frac{\\pi}{4}}^{\\frac{2\\pi}{3}} \\frac{3}{\\sin^2 x} dx = a+b\\sqrt{3}$ ($a,b \\in \\mathbb{Z}$). Tính $a^2+b^2$.",
              a: ["$10$", "$4$", "$\\dfrac{9}{2}$", "$2$"], c: 0,
              sol: "Ta có $I = 3 \\left[ -\\cot x \\right]_{\\frac{\\pi}{4}}^{\\frac{2\\pi}{3}} = -3 \\left( \\cot\\frac{2\\pi}{3} - \\cot\\frac{\\pi}{4} \\right) = -3 \\left( -\\frac{1}{\\sqrt{3}} - 1 \\right) = 3 + \\sqrt{3}$. Suy ra $a=3, b=1$. Vậy $a^2+b^2 = 3^2+1^2=10$."
            },
            {
              part: 1, type: "v1",
              q: "Họ các nguyên hàm của hàm số $f(x)=3 x^2-4 x$ là?",
              a: ["$F(x)=6 x-4+C$", "$F(x)=x^3+2 x^2+C$", "$F(x)=x^3-2 x^2+C$", "$F(x)=x^3-4+C$"], c: 2,
              sol: "$\\displaystyle\\int (3x^2 - 4x) \\mathrm{d}x = 3 \\frac{x^3}{3} - 4 \\frac{x^2}{2} + C = x^3 - 2x^2 + C$."
            },
            {
              part: 1, type: "v1",
              q: "Cho hình phẳng $D$ giới hạn bởi đường cong $y=\\sqrt{2+\\sin x}$, trục hoành và các đường thẳng $x=0$, $x=\\pi$. Khối tròn xoay tạo thành khi quay $D$ quanh trục hoành có thể tích $V$ bằng bao nhiêu?",
              a: ["$V=2 \\pi(\\pi+1)$", "$V=2(\\pi+1)$", "$V=2 \\pi$", "$V=2 \\pi^2$"], c: 0,
              sol: "V = \\pi \\displaystyle \\int_0^\\pi (2+\\sin x) \\, dx = \\pi \\left[ 2x - \\cos x \\right]_0^\\pi = \\pi [ (2\\pi - (-1)) - (0 - 1) ] = 2\\pi(\\pi + 1)."
            },
            {
              part: 1, type: "v1",
              q: "Tìm một nguyên hàm $F(x)$ của hàm số $f(x)=2 x-e^x$, biết $F(0)=-2$.",
              a: ["$F(x)=x-e^x+1$", "$F(x)=x^2-e^x-1$", "$F(x)=x^2-e^x-2$", "$F(x)=x^2-e^x+1$"], c: 1,
              sol: "$F(x) = x^2 - e^x + C$. Ta có $F(0) = -1 + C = -2 \\Rightarrow C = -1$. Vậy $F(x) = x^2 - e^x - 1$."
            },
            {
              part: 1, type: "v1",
              q: "Biết $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên đoạn $[a ; b]$ và $2 F(a)-7=2 F(b)$. Tính tích phân $I=\\displaystyle\\int_a^b f(x) d x$.",
              a: ["$I=-2$", "$I=\\dfrac{7}{2}$", "$I=-\\dfrac{7}{2}$", "$I=2$"], c: 2,
              sol: "$I = F(b) - F(a)$. Từ $2F(a) - 7 = 2F(b) \\Rightarrow 2[F(a) - F(b)] = 7 \\Rightarrow F(a) - F(b) = 3.5 \\Rightarrow F(b) - F(a) = -3.5 = -7/2$."
            },
            {
              part: 1, type: "v1",
              q: "Cho hàm số $y=f(x)$ có diện tích hai phần $A, B$ lần lượt bằng $11$ và $2$. Tính tích phân $\\displaystyle \\int_{-2}^1 f(x)dx$. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau7.png'></div>  ",
              a: ["$13$", "$-9$", "$-13$", "$9$"], c: 3,
              sol: "Tích phân biểu diễn diện tích ròng: $\\displaystyle \\int_{-2}^1 f(x)dx = S_A - S_B = 11 - 2 = 9$."
            },
            {
              part: 1, type: "v1",
              q: "Gọi $S$ là diện tích của hình phẳng giới hạn bởi các đường $y=4^x ; y=0 ; x=-1 ; x=2$. Khẳng định nào đúng?",
              a: ["$S=\\displaystyle\\int_{-1}^2 4^x d x$", "$S=\\pi \\displaystyle\\int_{-1}^2 4^x d x$", "$S=\\displaystyle\\int_0^{-1} 4^{2 x} d x$", "$S=\\displaystyle\\int_2^{-1} 4^x d x$"], c: 0,
              sol: "Vì $4^x > 0$ trên $[-1, 2]$ nên $S = \\displaystyle\\int_{-1}^2 |4^x| dx = \\int_{-1}^2 4^x dx$."
            },
            {
              part: 1, type: "v1",
              q: "Biết rằng $\\displaystyle\\int_1^2(2^x+x^2) \\mathrm{d} x=\\frac{a}{\\ln 2}+\\frac{b}{3}$ với $a, b \\in \\mathbb{Z}$. Tính $a+b$.",
              a: ["$a+b=9$", "$a+b=8$", "$a+b=10$", "$a+b=7$"], c: 0,
              sol: "Tích phân bằng $\\left[ \\frac{2^x}{\\ln 2} + \\frac{x^3}{3} \\right]_1^2 = \\frac{2}{\\ln 2} + \\frac{7}{3}$. Suy ra $a=2, b=7 \\Rightarrow a+b=9$."
            },
            {
              part: 1, type: "v1",
              q: "Công thức nào sau đây mô tả diện tích của phần gạch chéo giới hạn bởi $y=-x^2+3$ và $y=x^2-2x-1$? <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau10.png'></div> ",
              a: ["$S=\\displaystyle \\int_{-1}^{2}(2 x^{2}-2 x-4) \\mathrm{d} x$", "$S=\\displaystyle \\int_{-1}^{2}(-2 x^{2}+2 x+4) \\mathrm{d} x$", "$S=\\displaystyle \\int_{-1}^{2}(-2 x+2) \\mathrm{d} x$", "$S=\\pi \\displaystyle \\int_{-1}^{2}(2 x^{2}+2 x-4) \\mathrm{d} x$"], c: 1,
              sol: "Giao điểm: $-x^2+3 = x^2-2x-1 \\Rightarrow 2x^2-2x-4=0 \\Rightarrow x=-1, x=2$. Trên đoạn này đường cong $y=-x^2+3$ nằm trên. Vậy $S = \\int_{-1}^2 [(-x^2+3)-(x^2-2x-1)] dx = \\int_{-1}^2 (-2x^2+2x+4)dx$."
            },
            {
              part: 1, type: "v1",
              q: "Tính thể tích $V$ giới hạn bởi $x=0, x=1$, thiết diện vuông góc $Ox$ là tam giác đều có cạnh $x \\sqrt{8-x^2}$.",
              a: ["$\\dfrac{37 \\sqrt{3}}{15}$", "$\\dfrac{37 \\sqrt{3}}{60}$", "$\\dfrac{37 \\sqrt{3}}{30}$", "$\\dfrac{39 \\sqrt{3}}{60}$"], c: 1,
              sol: "Diện tích thiết diện $S(x) = \\frac{cạnh^2 \\sqrt{3}}{4} = \\frac{\\sqrt{3}}{4}(8x^2-x^4)$. Thể tích $V = \\int_0^1 S(x)dx = \\frac{37\\sqrt{3}}{60}$."
            },
            {
              part: 1, type: "v1",
              q: "Thể tích khối tròn xoay tạo bởi $y=\\sqrt{9 x+7}$, $y=0$, $x=2, x=7$ quay quanh $Ox$.",
              a: ["$312 \\pi$", "$\\dfrac{475}{2} \\pi$", "$\\dfrac{531}{2} \\pi$", "$\\dfrac{475}{2}$"], c: 1,
              sol: "$V = \\pi \\int_2^7 (9x+7)dx = \\pi \\left[ \\frac{9x^2}{2} + 7x \\right]_2^7 = \\frac{475\\pi}{2}$."
            },

            // PHẦN II: ĐÚNG/SAI (4 CÂU)
            {
              part: 2, num: 1, type: "v2",
              q: "Biết rằng $f(x)=ax^2+bx+c$ thỏa mãn $\\displaystyle\\int_0^1 f(x)dx = -3.5$, $\\displaystyle\\int_0^2 f(x)dx = -2$. Gọi $F(x)$ là một nguyên hàm.",
              items: [
                { l: "$F(1) - F(0) = -3.5$", r: true },
                { l: "$\\displaystyle\\int_1^2 f(x)dx = 1.5$", r: true },
                { l: "$\\displaystyle\\int f(x)dx = \\frac{a}{3}x^3 + \\frac{b}{2}x^2 + cx$", r: false },
                { l: "Nếu $\\displaystyle\\int_0^3 f(x)dx = 6.5$, khi đó $a+b+3c = -12$", r: true }
              ],
              sol: "a) Đúng theo định nghĩa. b) Đúng vì $\\int_0^2 = \\int_0^1 + \\int_1^2 \\Rightarrow -2 = -3.5 + \\int_1^2$. c) Sai vì thiếu hằng số $C$. d) Đúng (giải hệ PT tìm được $a=1, b=3, c=-16/3$)."
            },
            {
              part: 2, num: 2, type: "v2",
              q: "Cho hàm số $f(x)=2x+1$.",
              items: [
                { l: "$\\displaystyle\\int f(x)dx =x^2 + x + C$", r: true },
                { l: "$\\displaystyle\\int_0^1 [(x-1)f(x)]dx = 2/3$", r: false },
                { l: "Nếu $G(2)=5$ thì $G(x)=x^2+x-1$", r: true },
                { l: "Nếu $F(1)=2$ thì $\\sum_{k=1}^{100} \\frac{1}{F(k)} = \\frac{100}{101}$", r: true }
              ],
              sol: "b) Tính ra $-5/6$. d) $F(x)=x(x+1)$, dùng sai phân tính được tổng 100/101."
            },
            {
              part: 2, num: 3, type: "v2",
              q: "Cho hàm số $f(x)=2 x-3 \\cos x$.",
              items: [
                { l: "Một nguyên hàm là $g(x)=x^2+3 \\sin x+2$", r: false },
                { l: "Nếu $F(\\pi/2)=3$ thì $F(x)=x^2-3 \\sin x+6$", r: false },
                { l: "Nguyên hàm thỏa $F(0)=0$ là $F(x)=x^2-3 \\sin x$", r: true },
                { l: "$\\displaystyle\\int f(x+\\pi) d x = x^2+2\\pi x + 3\\sin x + C$", r: true }
              ],
              sol: "a) Sai đạo hàm. b) Sai hằng số $C$ do vướng $\\pi^2/4$. d) Đúng do biến đổi góc hơn kém $\\pi$."
            },
            {
              part: 2, num: 4, type: "v2",
              q: "Cho đồ thị $f(x)=x+1$ và $g(x)=(0.7)^x$. <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau4_ds.png'></div>",
              items: [
                { l: "$\\displaystyle\\int_{-1}^0 f(x)dx = 0.5$", r: true },
                { l: "Thể tích quay quanh $Ox$ từ $x=-1$ đến $x=0$ của $f(x)$ là $9\\pi$", r: false },
                { l: "Thể tích quay quanh $Ox$ từ $x=0$ đến $x=2$ của $g(x)$ xấp xỉ $7.9$", r: false },
                { l: "Thể tích phần giới hạn bởi $f(x), g(x), Ox, x=-1, x=2$ xấp xỉ $4.4$", r: true }
              ],
              sol: "b) V = $\\pi/3$. c) V xấp xỉ 3.35. d) Đúng do chia 2 miền tích phân tại giao điểm $x=0$."
            },

            // PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
            {
              part: 3, num: 1, type: "v3",
              q: "Tính diện tích hình phẳng giới hạn bởi $y=-x^2+2 x+1$ và $y=2 x^2-4 x+1$.",
              c: "4",
              sol: "Giao điểm $x=0, x=2$. $S = \\int_0^2 |(-x^2+2x+1) - (2x^2-4x+1)| dx = \\int_0^2 (-3x^2+6x)dx = 4$."
            },
            {
              part: 3, num: 2, type: "v3",
              q: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=\\sqrt{x}, y=0, x=4$ quanh $Ox$ (làm tròn hàng phần mười).",
              c: "25.1",
              sol: "$V = \\pi \\int_0^4 x dx = 8\\pi \\approx 25.1$."
            },
            {
              part: 3, num: 3, type: "v3",
              q: "Họ nguyên hàm của $f(x)=3 x^2+2 x+5$ là $F(x)=a x^3+b x^2+5 x+C$. Tính $T=a+b$.",
              c: "2",
              sol: "Nguyên hàm là $x^3+x^2+5x+C \\Rightarrow a=1, b=1 \\Rightarrow a+b=2$."
            },
            {
              part: 3, num: 4, type: "v3",
              q: "Một mảnh đất hình thang cong giới hạn bởi $y=2\\sqrt{x}$ và $y=-2\\sqrt{x}$ từ $x=4$ đến $x=9$. Tính diện tích (làm tròn hàng phần chục). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau4_kq.png'></div> ",
              c: "50.7",
              sol: "<div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau4_kq_lg.png'></div> $S = \\int_4^9 (2\\sqrt{x} - (-2\\sqrt{x}))dx = \\int_4^9 4\\sqrt{x}dx = 152/3 \\approx 50.7$."
            },
            {
              part: 3, num: 5, type: "v3",
              q: "Ông An làm cổng Parabol cao 4m, rộng 4m. Phần chữ nhật CDEF giá 1.2tr/m2, phần còn lại 0.9tr/m2. Tính tổng chi phí (triệu đồng, làm tròn hàng phần mười). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau5_kq.png'></div> ",
              c: "11.4",
              sol: "PT Parabol $y=-x^2+4$. $S_{gate} = 2.2 \\times 2.79 = 6.138$. $S_{sides} = 32/3 - 6.138$. Tổng tiền = $6.138 \\times 1.2 + (32/3 - 6.138) \\times 0.9 \\approx 11.4$ triệu."
            },
            {
              part: 3, num: 6, type: "v3",
              q: "Cổng Parabol cao 18m, rộng 12m. Dây AB, CD chia diện tích thành 3 phần bằng nhau. Tính tỉ số $AB/CD$ (làm tròn hàng phần chục). <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau6_kq.png'></div> ",
              c: "0.8",
              sol: "<div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de2/cau6_kq_lg.png'></div> Sử dụng tính chất diện tích Parabol tỉ lệ với lập phương hoành độ: $x_2^3 = 2x_1^3 \\Rightarrow x_1/x_2 = 1/\\sqrt[3]{2} \\approx 0.8$."
            }
          ]
        },
        ]
    
        },
    {
      topic: "Hình học Oxyz",
      exams: [
        { title: "Đề 01: Hệ tọa độ", questions: [] },
        { title: "Đề 02: Mặt phẳng", questions: [] },
      ],
    },
  ],
  11: [
    {
        topic: "Đạo hàm",
        exams: [ { title: "Đề 01: Quy tắc tính", questions: [] } ]
    }
  ],
  10: []
};