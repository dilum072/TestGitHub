/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mobitel.ajax;

import com.mobitel.webmethod.WebServiceMethod;
import org.apache.log4j.Logger;

/**
 *
 * @author manjulas
 */
public class IsUserNameExis {
//when user register with system username check wether exists or not in system  using dwr //

    private static final Logger log = Logger.getLogger(IsUserNameExis.class);
    
    public boolean checkUserNameExists(String userName) {
        boolean isExists = false;
        try {
            WebServiceMethod webservice = new WebServiceMethod();
            if (!webservice.getUser(userName).getUserId().isEmpty()) {
                isExists = true;
            }
        } catch (Exception e) {
            log.info("user name isExits check issue " + e);
        }
        // System.out.println("Verify result " + verify);
        return isExists;
    }
}
