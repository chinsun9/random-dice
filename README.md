# Random Dice

**3D CSS - lighting, animations, and more! - Kevin Powell**을 보고 응용해서 만들었다

- https://youtu.be/NdftnCDwKaU

## 기능

- 주사위 돌리기
  - 주사위 돌리는 애니메이션
  - 랜덤 결과 1~6
- 핸드폰을 흔들어 주사위 돌리기

## TMI

### 핸드폰 흔들기 감지 : devicemotion

```js
window.addEventListener('devicemotion', (event) => {
  if (!event.acceleration) {
    console.log(`no acceleration`);
    return;
  }

  const currentTime = new Date().getTime();
  if (currentTime - lastTimestamp < 300) {
    return;
  }

  lastTimestamp = currentTime;

  const acceleration = Math.max(
    Math.abs(event.acceleration.x!),
    Math.abs(event.acceleration.y!),
    Math.abs(event.acceleration.z!)
  );

  if (acceleration >= 4) {
    dice.roll();
  }
});
```

- `devicemotion`라는 window 이벤트에서 가져올 수 있다
- x, y, z의 가속도를 얻어서 가장 큰 값을 기준으로 지정한 값을 넘기면 주사위를 굴리도록 했다
- 보안 컨텍스트에서만 동작하기 때문에 localhost 또는 HTTPS에서 동작한다
