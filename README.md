node-hwp
========

HWP 버전 5 문서를 여는 Node.js 라이브러리를 만드는 시도를 하는 중입니다.

현재, 이 패키지는 제작중이며, 다른 프로젝트에서 사용 될 준비가 **전혀** 되어 있지 않습니다.

작업 중 목록
------------
여기 있는 것은 당연히 모든 것을 포함하는 목록이 아닙니다.

* 파일
	* 암호화, 배포용 문서 읽는 방법 알아내고 읽기.
* Head
	* BORDER_FILL에서 문서화가 잘 되지 않은 부분 (Gradation, WindowBrush 등) 데이터 읽기.
	* CHAR_SHAPE에서 밑줄과 취소선 관련 내용 읽기.
	* TAB_DEF 더 자세히 채워넣기.
	* NUMBERING과 BULLET 완성하기.
	* 기타 다른 빠진 곳 채워넣기.
* Body
	* PARA_LINE_SEG의 "더 이상의 자세한 설명은 생략한다" 부분 채워넣기.
	* 영역 태그 처리하고, 종류를 찾아 분류해 보기.
	* 컨트롤 오브젝트 (특히 표와 사진) 더 읽기.
	* 기타 다른 빠진 곳 채워넣기.
* Import / Export
	* HWPML에서 읽어오는 기능 추가하기.
	* HWP로 내보내는 기능 추가하기.
* 기타
	* PIL 라이센스와 충돌하지 않는 라이센스 고르기(?).

API
---
우선 간단하게 다음과 같이 HWP 파일을 읽어와 HWPML로 출력할 수 있습니다.
```js
var hwp = require('hwp');
hwp.open('file.hwp', function(err, doc){
	console.log(doc.toHML());
});
```

### `hwp.open(file, [type], callback)`
주어진 경로로부터 HWP 문서를 읽습니다.

__인자__

* file : HWP 문서의 경로입니다.
* type (선택) : HWP 문서가 저장된 형식입니다. 현재는 `hwp`만을 지원합니다.
* callback(err, doc) : 콜백 함수입니다. 함수가 호출될 때에 첫 번째 인자에는 파일을 읽어올 때 발생한 에러 (있다면), 두 번째 인자에는 HWP 파일 객체가 대입됩니다.

### `hwp.HWP`
HWP 문서를 나타내는 객체입니다. 아래와 같은 속성들이 있습니다.

#### `_doc`

#### `_hml`

#### `_hwp_meta`
