// تنظیمات اولیه
const stage = document.getElementById('stage');
const ball = document.getElementById('ball');

const ballSize = 64;
let x = 20;         // موقعیت افقی اولیه
let y = 120;        // موقعیت عمودی اولیه
let vx = 3.2;       // سرعت افقی (پیکسل/فریم)
let vy = 2.4;       // سرعت عمودی (پیکسل/فریم)
const damping = 1;  // میرایی برخورد (۱ بدون کاهش سرعت)

// به‌روزرسانی اندازه صحنه در تغییر اندازه
let stageWidth = stage.clientWidth;
let stageHeight = stage.clientHeight;
window.addEventListener('resize', () => {
  stageWidth = stage.clientWidth;
  stageHeight = stage.clientHeight;
});

// حلقه انیمیشن
function animate() {
  x += vx;
  y += vy;

  // برخورد با لبه‌های افقی
  if (x <= 0) {
    x = 0;
    vx = -vx * damping;
  } else if (x + ballSize >= stageWidth) {
    x = stageWidth - ballSize;
    vx = -vx * damping;
  }

  // برخورد با لبه‌های عمودی
  if (y <= 0) {
    y = 0;
    vy = -vy * damping;
  } else if (y + ballSize >= stageHeight) {
    y = stageHeight - ballSize;
    vy = -vy * damping;
  }

  // اعمال موقعیت
  ball.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

// شروع
requestAnimationFrame(animate);
