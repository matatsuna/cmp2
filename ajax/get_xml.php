<?php
// http://nkmr.io/lecture/2014/get_xml.php.txt より
if(isset($_GET["url"]) && preg_match("/^https?:/",$_GET["url"])){
  header('Content-type: application/xml');
  $req_url = $_GET['url'];
  foreach ( $_GET as $key => $value){
    if( strcmp( $key, "url" ) ){
      // url でない場合はオプションをつなげる
      $req_url .= ("&" . $key . "=" . urlencode($value));
    }
  }
  echo file_get_contents($req_url);
}else{
  echo "error";
}
?>