//clears the dd/mm/yy fields onClick
function clearField(thefield) {
    if (thefield.defaultValue == thefield.value) {
        thefield.value = "";
        YAHOO.util.Dom.setStyle(thefield, 'color', '#000');
    }
}
function buttonHideShow(){
	if (this.id == "serviceEnabled")
	{
		enableButtons();
	}
	if (this.id == "serviceNotEnabled")
	{
		disableButtons();
	}
}
function disableButtons() {
	if (document.getElementById('continue_cc.x')) 
					YAHOO.util.Dom.get("continue_cc.x").setAttribute("disabled","disabled");
		 if (document.getElementById('next.x'))
					YAHOO.util.Dom.get("next.x").setAttribute("disabled","disabled");
}

function enableButtons() {
	if (document.getElementById('continue_cc.x')) 
					YAHOO.util.Dom.get("continue_cc.x").removeAttribute("disabled");
		 if (document.getElementById('next.x'))
					YAHOO.util.Dom.get("next.x").removeAttribute("disabled");
}

function hideNonJSSections() {
    if (document.getElementById("PPScrollBox")) {
        YAHOO.util.Dom.addClass("PPScrollBox", "scrollbox closed");
    }
    if (document.getElementById("country.x")) {
        YAHOO.util.Dom.addClass("country.x", "hide");
    }
    if (document.getElementById("language.x")) {
        YAHOO.util.Dom.addClass("language.x", "hide");
    }
    if (document.getElementById("visa")) {
        YAHOO.util.Dom.addClass("visa", "hide");
    }
    if (document.getElementById("electron")) {
        YAHOO.util.Dom.addClass("electron", "hide");
    }
    if (document.getElementById("postepay")) {
        YAHOO.util.Dom.addClass("postepay", "hide");
    }
    if (document.getElementById("mastercard")) {
        YAHOO.util.Dom.addClass("mastercard", "hide");
    }
    if (document.getElementById("discover")) {
        YAHOO.util.Dom.addClass("discover", "hide");
    }
    if (document.getElementById("amex")) {
        YAHOO.util.Dom.addClass("amex", "hide");
    }
    if (document.getElementById("jcb")) {
        YAHOO.util.Dom.addClass("jcb", "hide");
    }
    if (document.getElementById("refresh_card_type")) {
        YAHOO.util.Dom.addClass("refresh_card_type", "hide");
    }
}

function hideSoloSwitchFields() {
    if (document.getElementById("cardIssueInformation")) {
        YAHOO.util.Dom.addClass("cardIssueInformation", "hide");
    }
    if (document.getElementById("cardIssueInfo")) {
        YAHOO.util.Dom.addClass("cardIssueInfo", "hide");
    }
}

function hideOnLoad() {
    if (document.getElementById("lblccNumber")) {
        YAHOO.util.Dom.addClass("lblccNumber", "hide");
    }
    YAHOO.util.Dom.addClass("helpCCNumber", "hide");
    if (document.getElementById("cc_number")) {
        YAHOO.util.Dom.addClass("cc_number", "hide");
    }
    if (document.getElementById("fieldrowExpDate")) {
        YAHOO.util.Dom.addClass("fieldrowExpDate", "hide");
    }
    if (document.getElementById("paraCSC")) {
        YAHOO.util.Dom.addClass("paraCSC", "hide");
    }
    if (document.getElementById("fieldrowDOB")) {
        YAHOO.util.Dom.addClass("fieldrowDOB", "hide");
    }
    YAHOO.util.Dom.addClass(['bankInfoCUP', 'linkCUPBankList','linkCardType'], "hide");
    YAHOO.util.Dom.removeClass('billingAddContent', 'hide');
    hideSoloSwitchFields();
}

function showfieldsOnSelect(cardType) {
	if (document.getElementById('credit_card_type_select'))
	{
		document.getElementById('credit_card_type_select').value = cardType;
		
	}
    if (!cardType) {
        hideOnLoad();
    }
    else {
        if (document.getElementById("lblccNumber")) {
            YAHOO.util.Dom.removeClass("lblccNumber", "hide");
        }
        YAHOO.util.Dom.removeClass("helpCCNumber", "hide");
        if (document.getElementById("cc_number")) {
            YAHOO.util.Dom.removeClass("cc_number", "hide");
        }
        // Condition checking for PLC Cards (FR, FR Dom, IT & ES)
        var co_plc_country_code = document.getElementById("co_plc_country_code");
        if (co_plc_country_code && (cardType == 'C' || cardType == 'N' || cardType == 'Q' || cardType == 'L')) {
            // Show/hide Expiration Date module
            if (cardType == 'C' || cardType == 'N' || cardType == 'Q') {
                if (document.getElementById("fieldrowExpDate")) {
                    YAHOO.util.Dom.removeClass("fieldrowExpDate", "hide");
                }
            }
            // Show/hide CSC module
            if ((cardType == 'C') || (cardType == 'N' && (co_plc_country_code.value == 'IT' || co_plc_country_code.value == 'ES'))) {
                if (document.getElementById("paraCSC")) {
                    YAHOO.util.Dom.removeClass("paraCSC", "hide");
                }
            } else {
                if (document.getElementById("paraCSC")) {
                    YAHOO.util.Dom.addClass("paraCSC", "hide");
                }
            }
            // Show/hide DOB module
            if (cardType != 'C') {
                if (document.getElementById("fieldrowDOB")) {
                    YAHOO.util.Dom.removeClass("fieldrowDOB", "hide");
                }
            } else {
                if (document.getElementById("fieldrowDOB")) {
                    YAHOO.util.Dom.addClass("fieldrowDOB", "hide");
                }
            }
            if (document.getElementById("cardIssueInformation")) {
                YAHOO.util.Dom.addClass("cardIssueInformation", "hide");
            }
            if (document.getElementById("cardIssueInfo")) {
                YAHOO.util.Dom.addClass("cardIssueInfo", "hide");
            }
            if (cardType == 'L') {
                YAHOO.util.Dom.addClass("fieldrowExpDate", "hide");
            } else {
                YAHOO.util.Dom.removeClass("fieldrowExpDate", "hide");
            }
        } else if (cardType == 'c') { //  For CUP Card... Note: cardType 'c' and 'C' (case difference) are different
            YAHOO.util.Dom.addClass(['fieldrowExpDate', 'paraCSC', 'fieldrowDOB', 'billingAddContent'], 'hide');
            YAHOO.util.Dom.removeClass(['bankInfoCUP', 'linkCUPBankList','linkCardType'], 'hide');
        } else {
            if (document.getElementById("fieldrowExpDate")) {
                YAHOO.util.Dom.removeClass("fieldrowExpDate", "hide");
            }
            if (document.getElementById("paraCSC")) {
                YAHOO.util.Dom.removeClass("paraCSC", "hide");
            }
            if ((cardType == 'S') || (cardType == 'O')) {
                if (document.getElementById("cardIssueInformation")) {
                    YAHOO.util.Dom.removeClass("cardIssueInformation", "hide");
                }
                if (document.getElementById("cardIssueInfo")) {
                    YAHOO.util.Dom.removeClass("cardIssueInfo", "hide");
                    YAHOO.util.Dom.removeClass("issue-number", "hide");
                }
            } else {
                hideSoloSwitchFields();
            }
            YAHOO.util.Dom.addClass(['bankInfoCUP', 'linkCUPBankList','linkCardType'], 'hide');
            YAHOO.util.Dom.removeClass('billingAddContent', 'hide');
            if (document.getElementById("fieldrowDOB")) {
                YAHOO.util.Dom.addClass("fieldrowDOB", "hide");
            }
			 
        }
    }
}

function upgradeAccount() {
    if (document.signup_landing_form) {
        document.signup_landing_form.clicked_upgrade_link.value = '1';
        document.signup_landing_form.submit();
    }
    return false;
}

function refreshLanguage(ele) {
    for (i = 0; i < ele.form.elements.length; i++) {
        if (ele.form.elements[i].name == 'refresh_lang_code') {
            ele.form.elements[i].value = '1';
        }
    }
    ele.form.submit();
}

function showHideScrollBox(objScrollBox) {
    if (document.getElementById(objScrollBox).className == 'scrollbox closed') {
        document.getElementById(objScrollBox).className = "scrollbox";
    }
    else {
        document.getElementById(objScrollBox).className = 'scrollbox closed';
    }
}

function disableElement(elt) {
    if ((document.getElementById(elt))) {
        document.getElementById(elt).disabled = true;
    }
}

function enableElement(elt) {
    if ((document.getElementById(elt))) {
        document.getElementById(elt).disabled = false;
    }
}

function disableCCFields(chkLinkCC) {
    if (!document.getElementById(chkLinkCC).checked) {
        disableElement("cc_number");
        disableElement("expdate_month");
        disableElement("expdate_year");
        disableElement("cvv2_number");
        if (document.getElementById("credit_card_type_select")) {
            disableElement("credit_card_type_select");
            disableElement("issue-number");
            disableElement("startdate_month");
            disableElement("startdate_year");
            disableElement("dob_b");
            disableElement("dob_a");
            disableElement("dob_c");
            disableElement("checkCUPOnlineTransfer");
        }
		enableButtons();
    }
    else {
        enableElement("cc_number");
        enableElement("expdate_month");
        enableElement("expdate_year");
        enableElement("cvv2_number");
        if (document.getElementById("credit_card_type_select")) {
            enableElement("credit_card_type_select");
            enableElement("issue-number");
            enableElement("startdate_month");
            enableElement("startdate_year");
            enableElement("dob_b");
            enableElement("dob_a");
            enableElement("dob_c");
            enableElement("checkCUPOnlineTransfer");
        }
	}
}
function disableBankFields(chkLinkBank){    
           if (!document.getElementById(chkLinkBank).checked) {
               disableElement("bank_acct_account_number");
               disableElement("bank_acct_routing_number1");        
               disableElement("dob_dd");
               disableElement("dob_mm");
               disableElement("dob_yyyy");        
           }
           else {
               enableElement("bank_acct_account_number");
               enableElement("bank_acct_routing_number1");        
               enableElement("dob_dd");
               enableElement("dob_mm");
               enableElement("dob_yyyy");        
           
           }
       }
//getCC.js
//sets opacity, checked status for cards


function getCC(sourceObj) {
    //credit cards
    var visa = document.getElementById("pm-visa");
    var electron = document.getElementById("pm-electron");
    var mastercard = document.getElementById("pm-mastercard");
    var discover = document.getElementById("pm-discover");
    var amex = document.getElementById("pm-amex");
    var jcb = document.getElementById("pm-jcb");
    var cup = document.getElementById("pm-cup");

    // prefix for visa electron, new prefix need to be added here
    var isElectron = false;
    var electronPrefix4 = "4917,4913,4508,4844,";
    var electronPrefix6 = "417500,"
    var electronPrefixArray4 = new Array();
    var electronPrefixArray6 = new Array();
	var cupPrefix = [45806, 49102, 49104, 53098, 53242, 53243, 53591, 53783, 400360, 404119, 404120, 405512, 406252, 406254, 409669, 409670, 412962, 421349, 427018, 433666, 433667, 433670, 436718, 436728, 436738, 436742, 438588, 451804, 451810, 451811, 453242, 456351, 458071, 486493, 486494, 491031, 491032, 491035, 491037, 491038, 514957, 514958, 518364, 518377, 518378, 518379, 518474, 518475, 518476, 519412, 520082, 524090, 524091, 525498, 544033, 547766, 552853, 553242, 558868];

    electronPrefixArray4 = electronPrefix4.split(",");
    electronPrefixArray6 = electronPrefix6.split(",");

    // Get selected country; disable highlighting for Italy
    var selCountry = "";
    var currCountry = "";

    if (document.getElementById('country_code')) {
        var country = document.getElementById('country_code');
        if (country.options) {
            selCountry = country.options[country.selectedIndex].value;
        } else {
            selCountry = country.value;
        }
    } else if (document.getElementById("co_plc_country_code")) {
		selCountry = document.getElementById("co_plc_country_code").value;
	}
	
	if (document.getElementById('co_plc_country_code')) {
		currCountry = document.getElementById('co_plc_country_code').value;
	}
	
    var enableHighlight = (selCountry == 'IT') ? false : true;
	
    //In this instance the 'sourceObj' represent the input field object from which the function is invoked
    if (sourceObj) {
        //var formName = sourceObj.form.name;
        //toggling fx

        function amexOff() {
            if (enableHighlight) {
                amex.style.opacity = "0.13";
                amex.style.filter = "alpha(opacity=20)";
            }
        }

        function amexOn() {
			showfieldsOnSelect('A');
			enableButtons();
            amex.style.opacity = "1";
            amex.style.filter = "alpha(opacity=100)";
            //set amex to checked			
            document.getElementById('amex').checked = true;
        }

        function discoverOff() {
            if (enableHighlight) {
                discover.style.opacity = "0.13";
                discover.style.filter = "alpha(opacity=20)";
            }
        }

        function discoverOn() {
            discover.style.opacity = "1";
            discover.style.filter = "alpha(opacity=100)";
            //set discover to checked
            document.getElementById('discover').checked = true;
        }

        function mastercardOff() {
            if (enableHighlight) {
                mastercard.style.opacity = "0.13";
                mastercard.style.filter = "alpha(opacity=20)";
            }
        }

        function mastercardOn() {
			showfieldsOnSelect('M');
			enableButtons();
            mastercard.style.opacity = "1";
            mastercard.style.filter = "alpha(opacity=100)";
            //set mastercard to checked
            document.getElementById('mastercard').checked = true;
        }

        function visaOff() {
            if (enableHighlight) {
                visa.style.opacity = "0.13";
                visa.style.filter = "alpha(opacity=20)";
            }
        }

        function visaOn() {
			showfieldsOnSelect('V');
			enableButtons();
            visa.style.opacity = "1";
            visa.style.filter = "alpha(opacity=100)";
            //set visa to checked
            document.getElementById('visa').checked = true;
        }

        function electronOff() {
            if (enableHighlight) {
                electron.style.opacity = "0.13";
                electron.style.filter = "alpha(opacity=20)";
            }
        }

        function electronOn() {
			enableButtons();
			showfieldsOnSelect('E');
            electron.style.opacity = "1";
            electron.style.filter = "alpha(opacity=100)";
            //set visa to checked
            document.getElementById('visa').checked = true;
        }

        function jcbOff() {
            jcb.style.opacity = "0.13";
            jcb.style.filter = "alpha(opacity=20)";
        }

        function jcbOn() {
            jcb.style.opacity = "1";
            jcb.style.filter = "alpha(opacity=100)";
            //set jcb to checked
            document.getElementById('jcb').checked = true;
        }
		
		function cupOff() {
            cup.style.opacity = "0.13";
            cup.style.filter = "alpha(opacity=20)";
        }

        function cupOn() {
			showfieldsOnSelect('c');
			disableButtons();
            cup.style.opacity = "1";
            cup.style.filter = "alpha(opacity=100)";
            //set jcb to checked
            document.getElementById('cup').checked = true;
			document.getElementById('serviceNotEnabled').checked = "true";
        }
		
		function isCupCard(number) {
			var left = 0;
			var right = cupPrefix.length - 1;
			while (left <= right) {
				var mid = parseInt((left + right) / 2);
				if (cupPrefix[mid] == number) {
					return true;
				} else if (cupPrefix[mid] < number) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
			return false;
		}
		

        //begin parsing logic
        if (sourceObj.value.length > 1) {
            switch (true) {
            case (sourceObj.value.substring(0, 1) == '3'):
                //51 = 3 = Diners (Mastercard) (36) or Amex (34 or 37)  (7=55)
                if (sourceObj.value.substring(1, 2) == '6') {
                    if (visa) {
                        visaOff();
                    }
                    if (electron) {
                        electronOff();
                    }
                    if (amex) {
                        amexOff();
                    }
                    if (discover) {
                        discoverOff();
                    }
                    if (mastercard) {
                        mastercardOn();
                    }
                    if (jcb) {
                        jcbOff();
                    }
					if (cup) {
						cupOff();
					}
                } else if (sourceObj.value.substring(1, 2) == '5') {
                    if (visa) {
                        visaOff();
                    }
                    if (electron) {
                        electronOff();
                    }
                    if (amex) {
                        amexOn();
                    }
                    if (discover) {
                        discoverOff();
                    }
                    if (mastercard) {
                        mastercardOff();
                    }
                    if (jcb) {
                        jcbOn();
                    }
					if (cup) {
						cupOff();
					}
                } else {
                    if (visa) {
                        visaOff();
                    }
                    if (electron) {
                        electronOff();
                    }
                    if (mastercard) {
                        mastercardOff();
                    }
                    if (discover) {
                        discoverOff();
                    }
                    if (amex) {
                        amexOn();
                    }
                    if (jcb) {
                        jcbOff();
                    }
					if (cup) {
						cupOff();
					}
                }
                break;

            case (sourceObj.value.substring(0, 1) == '4'):
                //52 = 4 = visa
				if ((currCountry == 'C2') && (isCupCard(sourceObj.value.substring(0,5)) || (isCupCard(sourceObj.value.substring(0,6))))) {
					if (mastercard) {
						mastercardOff();
					}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
					}
					if (jcb) {
						jcbOff();
					}
					if (cup) {
						cupOn();
					}
				} else {
					if (mastercard) {
						mastercardOff();
					}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (visa) {
						visaOn();
					}
					if (electron) {
						electronOn();
					}
					if (jcb) {
						jcbOff();
					}
					if (cup) {
						cupOff();
					}
				}

                //check for visa electron
                if (sourceObj.value.length >= 4) {
					if ((currCountry != 'C2') && (!isCupCard(sourceObj.value.substring(0,5)) || (!isCupCard(sourceObj.value.substring(0,6))))) {
						for (i = 0; i < electronPrefixArray4.length; i++) {
							if (sourceObj.value.substring(0, 4) == electronPrefixArray4[i]) {
								isElectron = true;
							}
						}
						if (sourceObj.value.length >= 6 && !isElectron) {
							for (i = 0; i < electronPrefixArray6.length; i++) {
								if (sourceObj.value.substring(0, 6) == electronPrefixArray6[i]) {
									isElectron = true;
								}
							}
						}
						if (isElectron) {
							if (electron) {
								electronOn();
							}
							if (visa) {
								visaOff();
							}
						}
						else {
							if (electron) {
								electronOff();
							}
							if (visa) {
								visaOn();
							}
						}
					}
                }
                break;

            case (sourceObj.value.substring(0, 1) == '5'):
				if ((currCountry == 'C2') && (isCupCard(sourceObj.value.substring(0,5)) || (isCupCard(sourceObj.value.substring(0,6))))) {
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
					}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (mastercard) {
						mastercardOff();
					}
					if (jcb) {
						jcbOff();
					}
					if (cup) {
						cupOn();
					}
				} else {
					//53 = 5 = mastercard
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
					}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (mastercard) {
						mastercardOn();
					}
					if (jcb) {
						jcbOff();
					}
					if (cup) {
						cupOff();
					}
					break;
				}

            case (sourceObj.value.substring(0, 1) == '6'):
                //54 = 6 = discover
                if (visa) {
                    visaOff();
                }
                if (electron) {
                    electronOff();
                }
                if (mastercard) {
                    mastercardOff();
                }
                if (amex) {
                    amexOff();
                }
                if (currCountry == 'C2') {
					if (cup) {
						cupOn();
					}
				} else {
					if (discover) {
						discoverOn();
					}
				}
                if (jcb) {
					jcbOff();
                }
                break;
            }
            //end switch
        }
        //end if
        //else reset the images
        else {
            if (visa) {
                visa.style.opacity = "1";
                visa.style.filter = "alpha(opacity=100)";
            }
            if (electron) {
                electron.style.opacity = "1";
                electron.style.filter = "alpha(opacity=100)";
            }
            if (mastercard) {
                mastercard.style.opacity = "1";
                mastercard.style.filter = "alpha(opacity=100)";
            }
            if (amex) {
                amex.style.opacity = "1";
                amex.style.filter = "alpha(opacity=100)";
            }
            if (discover) {
                discover.style.opacity = "1";
                discover.style.filter = "alpha(opacity=100)";
            }
            if (jcb) {
                jcb.style.opacity = "1";
                jcb.style.filter = "alpha(opacity=100)";
            }
			if (cup) {
                cup.style.opacity = "1";
                cup.style.filter = "alpha(opacity=100)";
            }
			if (currCountry=='C2') {
				YAHOO.util.Dom.addClass(['fieldrowExpDate', 'paraCSC', 'fieldrowDOB', 'billingAddContent', 'bankInfoCUP', 'linkCUPBankList','linkCardType'], 'hide');
				YAHOO.util.Dom.removeClass('billingAddContent', 'hide');
				enableButtons();
			}
        }
        //end else
    }
}
//end fx
//resets cc logo opacity on page reload. 
function initialize() {
    var cc_number = document.getElementById("cc_number");
    if (cc_number) {
        getCC(cc_number);
    }
}

function defaultSettingsFS() {
    //For DE
    if (document.getElementById("refresh.x")) {
        YAHOO.util.Dom.addClass("refresh.x", "hide");
    }
}

function autoTabSwitch(elt, nextElt) {
    if (elt.value.length >= 3) {
        nextElt.focus();
    }
}

function disableGetStarted() {
    if (document.getElementById("account_type_personal")) {
        document.getElementById("account_type_personal").disabled = "disabled";
        YAHOO.util.Dom.addClass("account_type_personal", "disabled");
    }
    if (document.getElementById("account_type_premier")) {
        document.getElementById("account_type_premier").disabled = "disabled";
        YAHOO.util.Dom.addClass("account_type_premier", "disabled");
    }
    if (document.getElementById("account_type_business")) {
        document.getElementById("account_type_business").disabled = "disabled";
        YAHOO.util.Dom.addClass("account_type_business", "disabled");
    }
}

function showAllFundingSources() {
    // commented out as there was two request has been sent to sitecatalyst during page load
    //var s=s_gi('paypalglobal'); s.pageName='SignUp:FundingSource';s.t();
    var layout2ContObjClass = YAHOO.util.Dom.getElementsByClassName("layout2", "div");
    YAHOO.util.Dom.removeClass(layout2ContObjClass, "hide");
    YAHOO.util.Event.onAvailable("expandedBank", function () {
        YAHOO.util.Dom.addClass(this, "hide");
    });
    YAHOO.util.Event.onAvailable("expandedCC", function () {
        YAHOO.util.Dom.addClass(this, "hide");
    });
    if (document.getElementById("fundSourcePP")) {
        YAHOO.util.Dom.removeClass("fundSourcePP", "hide");
    }
    // Blue Box
    if (!YAHOO.util.Dom.hasClass('page', 'emailBank')) {
        resetBillAddressSelection();
    }
    if (document.getElementById("edit-billing-address")) {
        document.getElementById("edit-billing-address").style.display = "none";
    }
    if (document.getElementById("change-billing-address")) {
        document.getElementById("change-billing-address").style.display = "inline";
    }
    if (document.getElementById("credit_card_type_select")) {
        hideOnLoad();
        document.getElementById("credit_card_type_select").value = "";
    }
    if (YAHOO.util.Dom.hasClass('page', 'emailBank')) {
        YAHOO.util.Dom.removeClass("linkBankBox", "hide");
    } else if (YAHOO.util.Dom.hasClass('page', 'emailCC')) {
        YAHOO.util.Dom.removeClass("linkCCBox", "hide");
    } else {
        YAHOO.util.Dom.removeClass("linkBankBox", "hide");
        YAHOO.util.Dom.removeClass("linkCCBox", "hide");
    }
    if (YAHOO.util.Dom.hasClass('page', 'emailBank')) {
        //Intermediate Bank Page 
        document.frm_fundingsource_name.funding_source_ui_state.value = 5;
    } else if (YAHOO.util.Dom.hasClass('page', 'emailCC')) {
        //Intermediate CC Page
        document.frm_fundingsource_name.funding_source_ui_state.value = 6;
    } else {
        //50 - 50
        document.frm_fundingsource_name.funding_source_ui_state.value = 1;
    }
}

function isJavascriptEnabled() {
    document.getElementById("frm_fundingbank_id").javascript_enabled.value = 'true';
}



function isCupCard(number) {
	var left = 0;
    var right = CardTypes.cupBin.length - 1;
    while (left <= right) {
        var mid = parseInt((left + right) / 2);
        if (CardTypes.cupBin[mid] == number) {
			return true;
        } else if (CardTypes.cupBin[mid] < number) {
			left = mid + 1;
        } else {
			right = mid - 1;
		}
    }
    return false;
}




YAHOO.util.Event.on(window, 'load', function () {
    var cardType = document.getElementById("credit_card_type_select");
    if (cardType != null) {
        if(document.getElementById("credit_card_type_select").value=="")
           hideOnLoad();
    }
	
    hideNonJSSections();
		
	if ((document.getElementById("frm_fundingsource_id")) || (document.getElementById("frm_fundingbank_id")) || (document.getElementById("frm_fundingcc_id"))) {
        defaultSettingsFS();
        PAYPAL.util.HistoryManager.init();
        var buttons = new Array(5);
        var layout2Cont = YAHOO.util.Dom.getElementsByClassName("layout2", "div");
		var topupNoteBank = YUD.get("topupNoteBank");
        if (YAHOO.util.Dom.get('linkbank.x')) {
            YAHOO.util.Event.addListener("linkbank.x", "click", function (e) {
                YAHOO.util.Event.stopEvent(e);
                PAYPAL.util.HistoryManager.updateFragment("ShowBank");
                return false;
            });
        }
        YAHOO.util.Event.addListener("linkcc.x", "click", function (e) {
            YAHOO.util.Event.stopEvent(e);
            PAYPAL.util.HistoryManager.updateFragment("ShowCC");
			YUD.addClass(topupNoteBank,"hide");
            return false;
        });
        YAHOO.util.Event.addListener("back_bank.x", "click", function (e) {
            if (!bankBackSubmit) {
                YAHOO.util.Event.stopEvent(e);
                PAYPAL.util.HistoryManager.updateFragment("ShowBankAndCC");
                return false;
            }
        });
        YAHOO.util.Event.addListener("back_cc.x", "click", function (e) {
            if (!ccBackSubmit) {
                YAHOO.util.Event.stopEvent(e);
                PAYPAL.util.HistoryManager.updateFragment("ShowBankAndCC");
				YUD.removeClass(topupNoteBank,"hide");
                return false;
            }
        });
        // Show bank info box
        PAYPAL.util.HistoryManager.add('ShowBank', function () {
            var s = s_gi('paypalglobal');
            s.pageName = 'SignUp:FundingSource:Bank';
            s.t();
            YAHOO.util.Event.onAvailable("expandedBank", function () {
                YAHOO.util.Dom.removeClass(this, "hide");
            });
            YAHOO.util.Event.onAvailable("expandedCC", function () {
                YAHOO.util.Dom.addClass(this, "hide");
            });
            YAHOO.util.Dom.addClass(layout2Cont, "hide");
            if (document.getElementById("fundSourcePP")) {
                YAHOO.util.Dom.addClass("fundSourcePP", "hide");
            }
            //Expanded Bank
            document.frm_fundingbank_name.funding_source_ui_state.value = "2";
            if (document.frm_fundingbank_name.funding_source_previous_state.value == '') {
                if (YAHOO.util.Dom.hasClass('page', 'emailBank')) {
                    document.frm_fundingbank_name.funding_source_previous_state.value = 5;
                } else {
                    document.frm_fundingbank_name.funding_source_previous_state.value = 1;
                }
            }
        });
        // Show Credit card box
        PAYPAL.util.HistoryManager.add('ShowCC', function () {
            var s = s_gi('paypalglobal');
            s.pageName = 'SignUp:FundingSource:CC';
            s.t();
            YAHOO.util.Event.onAvailable("expandedCC", function () {
                YAHOO.util.Dom.removeClass(this, "hide");
            });
            YAHOO.util.Event.onAvailable("expandedBank", function () {
                YAHOO.util.Dom.addClass(this, "hide");
            });
            YAHOO.util.Dom.addClass(layout2Cont, "hide");
            if (document.getElementById("fundSourcePP")) {
                YAHOO.util.Dom.addClass("fundSourcePP", "hide");
            }
            if (YAHOO.util.Dom.hasClass('page', 'emailCC')) {
                //Expanded CC - Left Justified
                document.frm_fundingcc_name.funding_source_ui_state.value = "4";
            } else {
                //Expanded CC
                document.frm_fundingcc_name.funding_source_ui_state.value = "3";
            }
            if (document.frm_fundingcc_name.funding_source_previous_state.value == '') {
                if (YAHOO.util.Dom.hasClass('page', 'emailCC')) {
                    document.frm_fundingcc_name.funding_source_previous_state.value = 6;
                } else {
                    document.frm_fundingcc_name.funding_source_previous_state.value = 1;
                }
            }
        });
        // Show Bank and CC box
        PAYPAL.util.HistoryManager.add('ShowBankAndCC', function () {
            showAllFundingSources();
        });
        // Show Bank and CC box; when back button is clicked after page loaded first time
        if (!YAHOO.util.Dom.hasClass('page', 'reenter')) {
            var isDefaultHistorySet = isDefaultHistory();
            if (isDefaultHistorySet) {
                PAYPAL.util.HistoryManager.add('', function () {
                    showAllFundingSources();
                });
            }
        }
        if (document.getElementById("ccicons")) {
            YAHOO.util.Dom.removeClass("ccicons", "blockDisp");
        }
        if (document.getElementById("continue_de_bank.x")) {
            YAHOO.util.Event.addListener("continue_de_bank.x", "click", function () {
                isJavascriptEnabled();
            });
        }
    }
    if (document.getElementById("signup_landing_form")) {
        YAHOO.util.Event.addListener("upgradeAccount", "click", function () {
            upgradeAccount()
        });
        YAHOO.util.Event.addListener("signup_language_preference", "change", function () {
            refreshLanguage(document.getElementById("signup_language_preference"))
        });
        // premier (id="premier") button is clicked when personal, premier and business avail
        YAHOO.util.Event.addListener("premier", "click", function () {
            var formField = document.createElement("input");
            formField.setAttribute("name", "new_landing_page");
            formField.setAttribute("type", "hidden");
            formField.setAttribute("value", "");
            document.getElementById("signup_landing_form").appendChild(formField);

        });
    }

    if (document.getElementById("signup_form")) {
        // Country: JP
        if (document.getElementById("zip2")) {
            YAHOO.util.Event.addListener("zip", "keyup", function () {
                autoTabSwitch(this, this.form.zip2)
            });
        }
        if (document.getElementById("cc_checkbox_selection") && document.getElementById("cc_checkbox_selection").checked == false) {
            disableCCFields("cc_checkbox_selection");
        }
        YAHOO.util.Event.addListener("agreementlink", "click", function () {
            showHideScrollBox("UAScrollBox")
        });
        YAHOO.util.Event.addListener("privacylink", "click", function () {
            showHideScrollBox("PPScrollBox")
        });
        YAHOO.util.Event.addListener("cc_checkbox_selection", "click", function () {
            disableCCFields("cc_checkbox_selection")
        });
        YAHOO.util.Event.addListener("next.x", "click", function () {
            YAHOO.util.Dom.addClass("next.x", "disabled");
        });
    }
    YAHOO.util.Event.addListener("credit_card_type_select", "change", function () {
        showfieldsOnSelect(this.value)
    });
    YAHOO.util.Event.addListener("cc_number", "blur", function () {
        getCC(document.getElementById("cc_number"))
    });
    YAHOO.util.Event.addListener("cc_number", "keyup", function () {
        getCC(document.getElementById("cc_number"))
    });
    YAHOO.util.Event.addListener("cc_number", "change", function () {
        getCC(document.getElementById("cc_number"))
    });
    YAHOO.util.Event.addListener("cc_number", "click", function () {
        getCC(document.getElementById("cc_number"))
    });
    YAHOO.util.Event.addListener("country", "change", function () {
        disableGetStarted()
    });
    initialize();
    if (document.getElementById("co_plc_country_code") && !document.getElementById("co_plc_country_code").value == "C2")
    {
		if (document.getElementById("credit_card_type_select")) {
		 showfieldsOnSelect(document.getElementById("credit_card_type_select").value);
		}
    }
    if (document.getElementById("dob_b") && !isNaN(document.getElementById("dob_b").value)) {
        YAHOO.util.Dom.setStyle("dob_b", 'color', '#000');
    }
    if (document.getElementById("dob_a") && !isNaN(document.getElementById("dob_a").value)) {
        YAHOO.util.Dom.setStyle("dob_a", 'color', '#000');
    }
    if (document.getElementById("dob_c") && !isNaN(document.getElementById("dob_c").value)) {
        YAHOO.util.Dom.setStyle("dob_c", 'color', '#000');
    }
	if (document.getElementById("co_plc_country_code") && document.getElementById("co_plc_country_code").value == "C2")
	{
		YAHOO.util.Dom.removeClass("lblccNumber", "hide");
		YAHOO.util.Dom.removeClass("helpCCNumber", "hide");
		YAHOO.util.Dom.removeClass("cc_number", "hide");
		YAHOO.util.Dom.addClass("bankInfoCUP", "hide");
		document.getElementById('selectBox').style.display = "none";
		document.getElementById('ccicons').style.display = "block";
		YAHOO.util.Event.addListener("serviceEnabled","click", buttonHideShow);
		YAHOO.util.Event.addListener('serviceNotEnabled',"click", buttonHideShow);
		//YAHOO.util.Event.addListener("cc_number", "keyup", fnCallback);
	}
});

var rhbSubmit = {
    ajaxPass: function(o) {
		data = o.responseText;
		if(data.substring(0,10) == "while (1);") {
        	data = data.substring(10);
        	data = '(' + data + ')';
        	data = eval(data);
        	this.submit(data.url);
    	}
    	else
        	this.init;
    },
    submit: function(url) {
		var rhbForm = document.createElement('form');
		rhbForm.setAttribute('action',url);
		rhbForm.setAttribute('method','post');
		document.getElementById('page').appendChild(rhbForm);
		rhbForm.submit();
    },
    init: function() {
		var callback = {
			 success: this.ajaxPass,
			 failure: this.init,
			 scope: rhbSubmit
		}
		var topupForm = document.getElementById('frm_fundingsource_id');
		var url = topupForm.getAttribute('action');
		var query = YAHOO.util.Connect.setForm(topupForm);
		YAHOO.util.Connect.asyncRequest('POST', url , callback);
    }
};

YUE.onAvailable("topupLightbox", function() {
	var lb = document.getElementById("topupLightbox");
	lb.parentNode.removeChild(lb);
	document.body.appendChild(lb);

	YUE.on("topup_submitRHB", "click", function(e) {
		YUE.preventDefault(e);
		var target = YUE.getTarget(e);
		var lbObj = new PAYPAL.util.Lightbox(lb, {close:false});
		lbObj.show();
		var vrCGI = document.createElement('input');
	    vrCGI.type = "hidden";
	    vrCGI.name = "view_requested";
	    vrCGI.value = "MiniPage";
	    document.frm_fundingsource_name.appendChild(vrCGI);
		var t = setTimeout("rhbSubmit.init();",4000);
	});
});
