<?php
namespace CampaignBundle;

use Core\Controller;

class PageController extends Controller {

	public function indexAction() {	
		$this->render('index');
	}

	public function jssdkConfigJsAction() {
		echo 1;
		$request = $this->Request();
		$fields = array(
		    'url' => array('notnull', '120'),
	    );
		$request->validation($fields);
		$url = urldecode($request->query->get('url'));
	  	$this->hostValid($url);
	  	$config = $this->jssdkConfig($url);
	  	$json = json_encode(array('status' => '1', 'data' => $config));
	  	echo exit;
	  	return $this->Response("SignWeiXinJs({$json})");
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

	public function reservationAction() {	
		$this->render('reservation');
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

	public function clearCookieAction() {
		setcookie('_user', json_encode($user), time(), '/');
		$this->statusPrint('success');
	}

	public function collectionsAction() {
		$request = $this->request;
		$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$id = $request->query->get('id');
	}

	public function bandAction() {
		ini_set('display_errors', '1');
		$request = $this->request;
		$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$id = $request->query->get('id');
		$databaseAPI = new \Lib\DatabaseAPI();
		$product = $databaseAPI->loadMakeById($id);
		//绑定
		$databaseAPI->bandShare(10, $product->uid);
		$databaseAPI->bandShare($product->uid, 10);
		
		$this->render('index', array('product' => $product));
    }

    public function clearMakeAction() {
    	exit;
    	$DatabaseAPI = new \Lib\DatabaseAPI();
		$DatabaseAPI->clearMake();

    		$data = array('status' => 1, 'msg' => 'clear');
			$this->dataPrint($data);
    }
}