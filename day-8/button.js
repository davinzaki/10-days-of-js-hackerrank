let initialValue = 0;

const btn = document.getElementById('btn');
// btn.innerHTML = initialValue;
btn.onclick = () => {
    btn.innerHTML = initialValue++
}