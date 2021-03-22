Vue.component('job-item', {
	props: ['job'],
	template: `
	<div class="marginbottom">
	   <div class="main-inf-title" > 
	     <h3>{{ job.title }}</h3>
         <div class="years">{{job.year}}</div> 
        </div> 
        <div  class="main-inf"><h4>{{job.position}}</h4></div>
        <p>{{job.value}}</p>
  </div>`
  })

  Vue.component('contacts-item', {
	props: ['contact'],
	template: `
            <div class="part-contact" >
              <div v-if="contact.id==1"><i class="fa fa-phone fa-lg"></i></div>
              <div v-else-if="contact.id==2"><i class="fa fa-envelope"></i></div>
              <div v-else><i class="fa fa-map-marker fa-lg"></i></div>
                <div> <h4 class="contact-title">{{ contact.title }}</h4>
                  <span class="contact">{{ contact.value }}</span>
                </div>
            </div>`
})

Vue.component('education-item', {
	props: ['education'],
	template: `
	<div class="marginbottom">
	  <div class="main-inf-title">
	   <h3> {{education.title}}</h3>
	   <div class="years">{{education.year}}</div> 
      </div>
	  <div class="main-inf">
	
	  <p>{{education.faculty}}</p>
	  <p>Специальность: {{education.specialty}}</p>
	  </div>
   </div> 
`
})

Vue.component('differences-item', {
	props: ['best'],
	template: `
	<div class="marginbottom">
	<div class="main-inf-title">
	 <h3>{{best.title}}</h3>
	<div class="years">{{best.year}}</div> 
	</div>
	<div class="main-inf">
	 <p>{{best.value}}</p>
	</div>
  </div>
	`
})

Vue.component('skills-item', {
	props: ['skill'],
	template: `
	<div class="skill" > 
	<span class="title">{{ skill.title }}</span>
	<div class="progressbar" v-if="skill.id==1">
	  <span  style="width: 60%"></span></div>
	  <div class="progressbar" v-if="skill.id==2">
		<span  style="width: 60%"></span></div>
		<div class="progressbar" v-if="skill.id==3">
		  <span  style="width: 40%"></span></div>
		  <div class="progressbar" v-if="skill.id==4">
			<span  style="width: 50%"></span></div>
			 <div class="progressbar" v-if="skill.id==5">
			  <span  style="width: 40%"></span></div>
	  
  </div>   
	`
})

let app = new Vue({
	el: '#app',
	data:{
		name:'альбина кашапова',
		speciality:'Web developer',
		image:'foto/avatar.jpg',
		skills:[
		{id:1, title:'HTML', value:70},
		{id:2, title:'CSS', value:60},
		{id:3, title:'JavaScript', value:40},
		{id:4, title:'English', value:50},
		{id:5, title: 'Vue.js', value:40}
	    ],
	  	contacts:[
		{id:1, title:'телефон', value:'8-987-499-15-40'},
		{id:2, title:'email', value:'axioma.25@gmail.com'},
        {id:3, title:'адрес', value:'Уфа, ул. Зои Космодемьянской, д.60'}
        ],
        jobs:[
          {title:'Видеомонтажер', year:'2011-2017', 
          value:'Видеомонтаж свадебных фильмов, клипов, детских утренников и т.д. в программе Adobe Premiere. Производство обложки для коробки в программе Adobe Photosop.'
		},
          {title:'АО "Международный Аэропорт Уфа"', year:'2013-2019', 
          position:'Специалист автоматизированных систем регистрации' ,
          value:'Обучение персонала системам регистрации, прниятие зачетов, допуск сотрудников к самостоятельной работе.' 
		}, 
		  {title:'ООО "Мегател"', year:'2019-по н/в',  
		  position: 'Специалист по обслуживанию клиентов',
		  value: 'Выявление причин отсутствия связи в области телеметрии, консультация клиентов, подготовка грамоного письменного/устно ответа.'
		}
        ],
		education:[
			{
			title:'УГАТУ (Уфимский Государственный Авиационный Технический Университет)',
			faculty:'Факультет информатики и робототехники',
			specialty:'Автоматизированные системы обработки информации и управления',
			year:'2003-2008'
		}
	],
		differences:[
			{title:'УГАТУ', year: '2008', 
			value: 'Победитель в студенческой научно-теоретической конференции "Неделя науки"'},
			{title: 'Межуданордный Аэропорт Уфа', year:'2014',
		    value:'Победитель в номинации "Лучший специалист"'}
		]
		

	}
})