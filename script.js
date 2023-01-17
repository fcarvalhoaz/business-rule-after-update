(function executeRule(current, previous /*null when async*/ ) {

    //Set value in field "Is SLA delayed?" to true

    var gr = new GlideRecord('x_mosmp_csc_projec_adherence_or_benefit_change');
    
	if(gr.get(current.task)){
        gr.setValue('u_delay_sla', true);
	gr.update();
    }

})(current, previous);
