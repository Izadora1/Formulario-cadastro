import pyautogui, time, string, pyperclip

def wait():
    time.sleep(0.3)

pyautogui.hotkey("ctrl","t")
wait()
pyautogui.write("http://127.0.0.1:5500")
wait()
pyautogui.press("enter")
wait()
pyautogui.click(200,200)
wait()
pyautogui.press("tab", presses=1)

carac_especiais = [char for char in string.printable if char not in ['\t','\n','\v','\f','\b','\r']]

for char in carac_especiais:
    pyautogui.write(char)
    wait()

for char in carac_especiais:
    pyperclip.copy(char)
    wait()
    pyautogui.hotkey('ctrl', 'v')
    wait()

emojis = ["😄", "😂", "😶‍🌫️"]
for emoji in emojis:
    pyperclip.copy(emoji)
    wait()
    pyautogui.hotkey('ctrl', 'v')
    wait()