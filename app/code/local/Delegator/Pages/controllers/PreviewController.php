<?php
class Delegator_Pages_PreviewController extends Mage_Core_Controller_Front_Action
{
  public function indexAction()
  {
	$this->loadLayout();

    $crumbs = $this->getLayout()->getBlock('breadcrumbs');
	if ($crumbs) {
		$crumbs->addCrumb('home', array('label' => $this->__('home'), 'title' => 'Go to Home Page', 'link' => Mage::getBaseUrl()));
		$crumbs->addCrumb('preview', array('label' => "DG Styles Preview", 'title' => 'DG Styles Preview'));
	}

    $this->renderLayout();
    return $this;
  }
}