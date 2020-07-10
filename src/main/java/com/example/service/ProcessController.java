package com.example.service;

import java.util.Collection;

import org.jbpm.services.api.ProcessService;
import org.jbpm.services.api.RuntimeDataService;
import org.jbpm.services.api.model.ProcessInstanceDesc;
import org.kie.api.runtime.process.ProcessInstance;
import org.kie.api.runtime.query.QueryContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProcessController {

	@Autowired
    RuntimeDataService runtimeDataService;
	
	@Autowired
	ProcessService processService;

    @GetMapping(path = "/processinstances", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<ProcessInstanceDesc> getProcessInstancesInfo() {
        return runtimeDataService.getProcessInstances(new QueryContext());
    }
    
    @GetMapping(path = "/getProcessInstanceInfo/processInstanceId/{processInstanceId}")
    public ProcessInstance getProcessInstancesInfo(@PathVariable String processInstanceId) {
        return processService.getProcessInstance(Long.valueOf(processInstanceId));
    }

}
