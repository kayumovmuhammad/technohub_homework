const data = [
    ["Водолей", 1, 20],
    ["Рыбы", 2, 19],
    ["Овен", 3, 21],
    ["Телец", 4, 20],
    ["Близнецы", 5, 21],
    ["Рак", 6, 21],
    ["Лев", 7, 23],
    ["Дева", 8, 23],
    ["Весы", 9, 23],
    ["Скорпион", 10, 23],
    ["Стрелец", 11, 22],
    ["Козерог", 12, 22],
];

function getNumberOfDay(d, m) {
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let ans = 0;

    for (let i = 0; i < m; i++) {
        ans += months[i];
    }

    ans += d;

    return ans;
}

console.log(getNumberOfDay(10, 12), getNumberOfDay(data[11][2], data[11][1]));

const monthElement = document.querySelector(".input_month");
const dayElement = document.querySelector(".input_day");
const btn = document.querySelector(".get_btn");

btn.addEventListener("click", () => {
    const day = dayElement.value;
    const month = monthElement.value;

    let j = 0;
    let ans = "Козерог";

    for (let i = 1; i <= 356; i++) {
        if (i == getNumberOfDay(data[j][2], data[j][1])) {
            ans = data[j][0];
        }

        if (i == getNumberOfDay(day, month)) {
            break;
        }
    }

    document.querySelector(".info").textContent = ans;
});
