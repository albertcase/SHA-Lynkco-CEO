<?php
namespace CampaignBundle;

use Core\Controller;


class ApiController extends Controller {

    public function __construct() {

    	global $user;

        parent::__construct();

        if(!$user->uid) {
	        $this->statusPrint('100', 'access deny!');
        } 
    }

    public function isloginAction() {

    	global $user;

    	$DatabaseAPI = new \Lib\DatabaseAPI();
		$rs = $DatabaseAPI->loadMakeByUid($user->uid);
    	
    	if ($rs) {
    		$data = array('status' => 1, 'msg' => $rs);
			$this->dataPrint($data);
    	} else {
    		$data = array('status' => 0, 'msg' => '未完成作品');
			$this->dataPrint($data);
    	}
    }

    public function formAction() {

    	global $user;

    	$request = $this->request;
    	$fields = array(
			'name' => array('notnull', '120'),
			'cellphone' => array('cellphone', '121'),
			'address' => array('notnull', '122'),
		);
		$request->validation($fields);
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$data = new \stdClass();
		$data->uid = $user->uid;
		$data->name = $request->request->get('name');
		$data->cellphone = $request->request->get('cellphone');
		$data->address = $request->request->get('address');

		if($DatabaseAPI->insertInfo($data)) {
			$data = array('status' => 1);
			$this->dataPrint($data);
		} else {
			$this->statusPrint('0', 'failed');
		}
    }

    public function answerAction() {
    	ini_set("display_errors",1);
    	global $user;

    	$request = $this->request;
    	$fields = array(
			'answer1' => array('notnull', '120'),
			'answer2' => array('notnull', '121'),
			'answer3' => array('notnull', '122'),
			'answer4' => array('notnull', '123'),
			'answer5' => array('notnull', '124'),
		);
		$request->validation($fields);
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$data = new \stdClass();
		$data->uid = $user->uid;
		$data->nickname = $user->nickname;
		$data->answer1 = $request->request->get('answer1');
		$data->answer2 = $request->request->get('answer2');
		$data->answer3 = $request->request->get('answer3');
		$data->answer4 = $request->request->get('answer4');
		$data->answer5 = $request->request->get('answer5');
		$data->total = $request->request->get('total');

		if($rs = $DatabaseAPI->insertMake($data)) {
			$data = array('status' => 1, 'msg' => $rs);
			$this->dataPrint($data);
		} else {
			$this->statusPrint('0', 'failed');
		}
    }

    public function loadAction() {

    	global $user;

    	$request = $this->request;
    	$fields = array(
			'id' => array('notnull', '120'),
		);
		$request->validation($fields);
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$id = $request->request->get('id');
		if($rs = $DatabaseAPI->loadMakeById($id)) {
			$data = array('status' => 1, 'msg' => $rs);
			$this->dataPrint($data);
		} else {
			$this->statusPrint('0', 'failed');
		}
    }

    public function listAction() {

    	global $user;

		$DatabaseAPI = new \Lib\DatabaseAPI();
		$rs = $DatabaseAPI->loadMakeByUid($user->uid);
		$list = $DatabaseAPI->loadListByUid($user->uid);
		$data = array('status' => 1, 'msg' => $rs, 'list'=>$list);
		$this->dataPrint($data);
		
    }

    public function submitAction() {

    	global $user;
    	if(!$user->uid) {
	        $this->statusPrint('100', 'access deny!');
        } 
    	$request = $this->request;
    	$fields = array(
			'sex' => array('notnull', '120'),
			'name' => array('notnull', '121'),
			'mobile' => array('cellphone', '122'),
			'email' => array('notnull', '123'),
			'store' => array('notnull', '124')
		);
		$request->validation($fields);
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$data = new \stdClass();
		$data->uid = $user->uid;
		$data->sex = $request->request->get('sex');
		$data->name = $request->request->get('name');
		$data->mobile = $request->request->get('mobile');
		$data->email = $request->request->get('email');
		$data->store = $request->request->get('store');

		if($DatabaseAPI->insertSubmit($data)) {
			$data = array('status' => 1);
			$this->dataPrint($data);
		} else {
			$this->statusPrint('0', 'failed');
		}
    }

}
