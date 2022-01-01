# lightBoard  
  
![KakaoTalk_20220101_113457783](https://user-images.githubusercontent.com/89592727/147843216-14ed6a8a-8b4c-4354-ae66-a619f517565c.jpg)  
  
Step : 한 문자씩 출력  
Play : 200ms당 한 문자씩 자동 출력  
  -> setInterval 함수 사용  
Stop : 자동 출력 정지  
  -> clearInterval 함수 사용  
Write : 유저가 직접 전광판에 들어갈 텍스트 입력 가능
  -> Write 버튼 클릭 시 Save 버튼으로 변환  
  -> 입력 없이 Save 버튼 클릭 시 기존 텍스트 출력  
  
텍스트의 길이가 board 라인을 벗어나지 않도록 초과되는 부분 만큼 텍스트가 좌측으로 이동  
  -> CSS : overflow / text-overflow / white-space 사용  
  -> JS : offsetWidth 사용, CSS 조작  
  
모바일 : Android에서는 정상 출력되나 ios에서는 가로 버전일 때, 문장 내 빈 공간(SpaceBar)이 생길 시  
        텍스트 위에 실선이 나타나는 문제가 있음  
