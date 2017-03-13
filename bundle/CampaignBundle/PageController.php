<?php
namespace CampaignBundle;

use Core\Controller;

class PageController extends Controller {

	public function indexAction() {	
		global $user;
		$databaseAPI = new \Lib\DatabaseAPI();
		$product = $databaseAPI->loadMakeByUid($id);
		if ($product) {
			$this->redirect("/rank?id=".$product->id);
		}
		$this->render('index');
	}

	public function rankAction() {	
		global $user;

		$request = $this->request;
		$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$id = $request->query->get('id');
		$databaseAPI = new \Lib\DatabaseAPI();
		$product = $databaseAPI->loadMakeById($id);
		$ismy = 1;
		//绑定
		if ($user->uid != $product->uid) {
			$ismy = 0;
			$databaseAPI->bandShare($user->uid, $product->uid);
			$databaseAPI->bandShare($product->uid, $user->uid);
		}
		$this->render('rank', array('ismy' => $ismy));
	}

	public function jssdkConfigJsAction() {
		ini_set("display_errors",1);
		$request = $this->Request();
		$fields = array(
		    'url' => array('notnull', '120'),
	    );
		$request->validation($fields);
		$url = urldecode($request->query->get('url'));
	  	$config = $this->jssdkConfig($url);
	  	$json = json_encode($config);
	  	return $this->Response($json);
	}

	public function jssdkConfig($url = '') {
		$RedisAPI = new \Lib\RedisAPI();
		$jsapi_ticket = $RedisAPI->getJSApiTicket();
		$wechatJSSDKAPI = new \Lib\JSSDKAPI();
		return $wechatJSSDKAPI->getJSSDKConfig(APPID, $jsapi_ticket, $url);
	}

	public function resultAction() {	
		global $user;

		$request = $this->request;
		$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$id = $request->query->get('id');
		$databaseAPI = new \Lib\DatabaseAPI();
		$product = $databaseAPI->loadMakeById($id);
		$ismy = 1;
		//绑定
		if ($user->uid != $product->uid) {
			$ismy = 0;
			$databaseAPI->bandShare($user->uid, $product->uid);
			$databaseAPI->bandShare($product->uid, $user->uid);
		}
		
		$this->render('match', array('ismy' => $ismy));
	}

	public function loginAction() {
		$request = $this->request;
		$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$id = $request->query->get('id');
		$user = new \stdClass();
		$user->uid = $id;
		$user->openid = 'openid_'.$id;
		$user->nickname = 'user_'.$id;
		$user->headimgurl = '111';
		setcookie('_user0206', json_encode($user), time()+3600*24*30, '/');
		echo 'user:login:'.$id;
		exit;

	}

	public function clearDataAction() {
		$databaseAPI = new \Lib\DatabaseAPI();
		$databaseAPI->clearMake();
		$data = array('status' => 1, 'msg' => 'clear');
			$this->dataPrint($data);
		exit;

	}

	public function clearCookieAction() {
		setcookie('_user', json_encode($user), time(), '/');
		$this->statusPrint('success');
	}

}