/*!
SPDX-License-Identifier: MIT
SPDX-FileCopyrightText: 2026 FreeCAD
SPDX-FileNotice: Part of the Trigo theme for Hugo.
*/const DONATE_PAGE="/freecad-website-preview-sandbox/pr-2/ja/donate/";document.querySelectorAll(".link-donate").forEach(e=>{e.addEventListener("click",()=>{setTimeout(()=>{window.location.assign(DONATE_PAGE)},1500)})})