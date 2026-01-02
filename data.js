// File: data.js
const examDatabase = {
  12: [
    {
      topic: "Nguyên hàm - Tích phân",  
      exams: [
        {
          title: "Đề 01",
          questions: [
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
              a: ["$F(x) = 2x - 3 - 1/x^2 + C$", "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln|x| + C$", "$\\displaystyle F(x) = \\dfrac{x^3}{3} + \\frac{3}{2}x^2 + \\ln x + C$", "$\\displaystyle F(x) = \\dfrac{x^3}{3} - \\dfrac{3}{2}x^2 + \\ln x + C$"],
              c: 1,
              sol: "Lấy nguyên hàm từng số hạng: $\\displaystyle \\int x^2 dx = x^3/3$; $\\displaystyle\\int -3x dx = -3x^2/2$; $\\int (1/x) dx = \\ln|x|.",
            },
            {
              part: 1, type: "v1",
              q: "Cho $a, b, c \\in K$ và hàm số $f(x)$ liên tục trên $K$. Mệnh đề nào sau đây <b>sai</b>?",
              a: ["$\\displaystyle \\int_a^b f(x)dx + \\int_c^b f(x)dx = \\int_a^c f(x)dx$", "$\\displaystyle \\int_a^b f(x)dx = \\int_a^b f(t)dt$", "$\\displaystyle \\int_a^b f(x)dx = -\\int_b^a f(x)dx$", "$\\displaystyle \\int_a^a f(x)dx = 0$"],
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
              a: ["$\\displaystyle S = \\int_a^b [f_2(x)-f_1(x)] dx$", "$\\displaystyle S = \\int_a^b [f_1(x)-f_2(x)] dx$", "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)]^2 dx$", "$\\displaystyle S = \\pi \\int_a^b [f_1(x)-f_2(x)] dx$"],
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
                { l: "Nếu $F(1) = 1,5$ thì $F(x) = 0,5x^2 + \\ln x + 1$", r: true },
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
              sol: "a) Sai. Vì $I = 6A \\Rightarrow A = I/6$. b) Sai. Phải là $I-J$. c) Sai. Phải dùng CT lũy thừa. d) Đúng."
            },
            {
              part: 2, num: 3, type: "v2",
              q: "Cho hàm số $\\displaystyle f(x) = x + 5 - \\dfrac{6}{x}$ xác định trên $\\mathbb{R}\\backslash\\{0\\}$.",
              items: [
                { l: "Đạo hàm của hàm số là $f'(x) = 1 + \\dfrac{6}{x^2}$", r: true },
                { l: "$\\displaystyle \\int f(x)dx = 0,5x^2 + 5x - 6\\ln|x| + C$", r: true },
                { l: "Với mọi $F(x)$ là nguyên hàm của $f(x)$, ta có $F(2) - F(1) = \\int_1^2 f(x)dx$", r: true },
                { l: "Nếu $G(x)$ là nguyên hàm thỏa $G(-2)=0$ thì $G(-6) = -13 - 6\\ln 3$", r: true },
              ],
              sol: "Tất cả các ý đều đúng.",
            },
            {
              part: 2, num: 4, type: "v2",
              q: "Cho bảng biến thiên của hàm số $y=f'(x)$ như hình vẽ: <div class='img-container'><img src='images/12/nguyen_ham_tich_phan/de1/cau4_ds.png'></div>",
              items: [
                { l: "$\\displaystyle \\int_2^5 f'(x)dx = f(5)-f(2)$", r: true },
                { l: "$f'(x) < 0$ trên khoảng $(2;3)$", r: true },
                { l: "Hàm số $y=f(x)$ đồng biến trên khoảng $(3;5)$", r: true },
                { l: "Giá trị $f(2) > f(3)$", r: true },
              ],
              sol: "Tất cả đều đúng.",
            },
            // PHẦN III (6 câu)
            {
              part: 3, num: 1, type: "v3",
              q: "Biết $\\displaystyle \\int (\\sin x - \\cos x)^2 dx = x + \\dfrac{1}{a} \\cos bx + C$. Tính giá trị $a+b$.",
              c: "4",
              sol: "$a=2, b=2 \\Rightarrow a+b=4$.",
            },
            {
              part: 3, num: 2, type: "v3",
              q: "Cho $2u+3v=2$ và $u-2v=4$. Tính $u-v$.",
              c: "3.14",
              sol: "$u=16/7, v=-6/7 \\Rightarrow u-v = 22/7 \\approx 3.14$.",
            },
            {
              part: 3, num: 3, type: "v3",
              q: "Cho $F(x) = (ax^2+bx+c)e^x$ là một nguyên hàm của $(x^2+1)e^x$. Tính $a+b+c$.",
              c: "2",
              sol: "$a=1, b=-2, c=3 \\Rightarrow a+b+c=2$.",
            },
            {
              part: 3, num: 4, type: "v3",
              q: "Tính tích phân $I = \\displaystyle \\int_0^3 f(x)dx$.",
              c: "7.5",
              sol: "$I = 7.5$.",
            },
            {
              part: 3, num: 5, type: "v3",
              q: "Tính giá trị $f(3)$ biết $S_A=4, S_B=10$ và $f(0)=2$.",
              c: "-4",
              sol: "$f(3) = -4$.",
            },
            {
              part: 3, num: 6, type: "v3",
              q: "Tính chi phí trồng hoa.",
              c: "4985",
              sol: "Tổng chi phí: 4985 ngàn đồng.",
            },
          ]
        },
        {
          title: "Đề 02",
          questions: [
            {
              part: 1, type: "v1",
              q: "Cho hàm số $f(x)$ liên tục trên đoạn $[1;2]$ và $\\displaystyle\\int_1^2 (4f(x)-2x)dx = 1$. Tính tích phân $\\displaystyle\\int_1^2 f(x)dx$.",
              a: ["$1$", "$-1$", "$-3$", "$3$"], c: 0,
              sol: "Kế quả bằng 1."
            },
            {
              part: 1, type: "v1",
              q: "Biết tích phân $\\displaystyle\\int_{\\frac{\\pi}{4}}^{\\frac{2\\pi}{3}} \\frac{3}{\\sin^2 x} dx = a+b\\sqrt{3}$. Tính $a^2+b^2$.",
              a: ["$10$", "$4$", "$\\dfrac{9}{2}$", "$2$"], c: 0,
              sol: "$a^2+b^2 = 10$."
            },
            // ... Thầy có thể dán tiếp các câu khác của Đề 02 vào đây ...
          ]
        }
      ]
    },
    {
      topic: "Hình học Oxyz",
      exams: [
        { title: "Đề 01", questions: [] },
        { title: "Đề 02", questions: [] },
      ],
    }
  ],
  11: [],
  10: []
};
