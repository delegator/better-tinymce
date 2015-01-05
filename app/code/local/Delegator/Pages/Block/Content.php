<?php
class Delegator_Pages_Block_Content extends Mage_Core_Block_Template
{
    public function _construct()
    {
        parent::_construct();
        echo("Hallo thar");
    }
}