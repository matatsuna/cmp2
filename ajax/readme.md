# Ajax編
## 概要
このサンプルは2016年10月19日行われたcmp2の課題2の参考として使って下さい。

## Ajaxとは
簡単にいうと**jsのプログラムからファイルを読み込みときに用いる技術**です。
htmlのタグから読み込む(src="hoge")のとは別です。
processingでいうloadStrings();みたいなものと考えてもらって構いません。
(個人的な見解です。)

## ファイルについて
 - index.html (始まりのファイル)
 - main.js (jsが書かれてる)
 - get_xml.php (xss対策のために経由するphpファイル)
 - jquery-3.1.1.min.js (ajaxを使うためのjquery)

## apiについて
livedoorが提供するWeather Hacks（気象データ配信サービス）で東京都の今日の天気予報を取得してます。
パラメーターをいじれば全国各地の天気が取得できます。
[http://weather.livedoor.com/weather_hacks/webservice](http://weather.livedoor.com/weather_hacks/webservice)

## その他
わからないことや質問は[@matatsuna](https://twitter.com/matatsuna)まで！