import React from "react";

function ExtractPagesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="682.667"
      height="682.667"
      version="1"
      viewBox="0 0 512 512"
      className={`${className} w-5 h-5`}
    >
      <path
        d="M333 4787L0 4455V2873c0-1541 0-1581 19-1604l19-24 454-6c431-5 457-6 532-28 67-19 232-111 1083-602C2659 290 3126 22 3145 13c69-33 55-54 470 665 265 459 381 668 383 693 3 30-1 40-23 58-35 27-58 27-89-2-14-12-184-296-377-632-193-335-353-611-354-613-2-2-332 187-734 419s-730 423-728 425c1 2 337-87 745-196 807-216 780-211 806-148 8 18 198 720 422 1561 321 1197 412 1526 423 1522 12-5 806-462 839-483 9-6-111-222-448-805-322-558-460-805-460-826 0-56 75-91 118-53 24 21 974 1667 980 1698 2 12-1 31-7 42s-228 144-493 297c-266 153-487 281-491 285-5 4 15 96 44 204l52 197-20 27c-18 24-50 35-274 95-273 74-290 75-318 26-18-32-8-74 22-93 12-8 111-38 220-67 160-43 197-56 194-68-2-9-210-785-462-1726-252-940-459-1711-459-1712-1-1-366 96-811 215l-809 217 696 5c666 5 697 6 717 24 21 19 21 19 21 767v748l-26 20c-35 27-57 26-91-3l-28-24-3-691-3-691H150v2960h577l21 23c22 23 22 29 22 310v287h2020l2-965 3-964 22-22c27-27 75-29 103-4 20 18 20 29 20 777 0 417 3 758 8 758 4 0 98-25 210-55 111-30 210-51 220-48 48 17 66 67 42 113-12 22-32 29-280 95l-195 52-3 186-2 186-27 20c-26 21-31 21-1137 21H665l-332-333zm287-107v-180H255l180 180c99 99 181 180 182 180 2 0 3-81 3-180z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default ExtractPagesIcon;