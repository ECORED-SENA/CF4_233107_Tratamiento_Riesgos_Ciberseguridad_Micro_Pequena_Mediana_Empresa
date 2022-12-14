export default {
  global: {
    componenteFormativo: 'Controles de seguridad',
    descripcionCurso:
      'Para establecer salvaguardas que permitan garantizar la seguridad de la información en las organizaciones, es necesario adoptar controles que permitan reducir el riesgo que afecten negativamente la organización; estos controles pueden ser de diversos tipos y alcance, dado que el ámbito de la ciberseguridad no se concentra únicamente en el entorno digital.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de acceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Firewall</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Funcionalidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'IDS/IPS, Sistemas de detección y prevención de intrusos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definiciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'UTM/XTM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Antimalware</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Detección y respuesta para endpoints (EDR)',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Cifrado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Comunicaciones cifradas',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Fuga de información',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Dispositivos móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Tipos',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Características',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo:
              '<em>Telework and Bring Your Own Device (BYOD) Security (NIST-SP800-114)</em>',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Infraestructuras críticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Características',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo:
              'Marco para mejorar la ciberseguridad de la infraestructura crítica',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Sistemas de correlacionamiento de logs y monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Conceptos',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Tipos',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Características',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Parcheado y/o actualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Tipos',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Características',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Plan de capacitación y concienciación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '11.1',
            titulo: 'Ruta de actualización',
            hash: 't_11_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '11.2',
            titulo: 'Estrategia de transferencia del conocimiento',
            hash: 't_11_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Audea. (2010). Fuga de Información ¿Qué es y cómo se puede prevenir? ',
      link:
        'https://www.audea.com/fuga-de-informacion-que-es-y-como-se-puede-prevenir/ ',
    },
    {
      referencia:
        'B, G. (2022). ¿Qué es SSL, TLS y HTTPS? Hostinger Tutoriales. ',
      link: 'https://www.hostinger.es/tutoriales/ssl-tls-https',
    },
    {
      referencia: 'Belcic, I. (2022). ¿Qué es el malware? Avast.',
      link: 'https://www.avast.com/es-es/c-malware',
    },
    {
      referencia:
        'Bitdefender. (s. f.). Unificación de la prevención, correlación entre endpoints, detección, respuesta y análisis de riesgos para cualquier organización. ',
      link:
        'https://www.bitdefender.es/business/products/gravityzone-enterprise-security.html ',
    },
    {
      referencia:
        'C, K. (2018). SFTP vs. FTPS Comparison: Which One Is Better? MSP360.',
      link: 'https://www.msp360.com/resources/blog/sftp-vs-ftps/',
    },
    {
      referencia: 'Chasco, I. (2015). SSH: Las cosas que no sabías. Irontec. ',
      link: 'https://blog.irontec.com/ssh-las-cosas-que-no-sabias/',
    },
    {
      referencia: 'Cisco Systems. (2021). ¿Qué es un firewall? Cisco. ',
      link:
        'https://www.cisco.com/c/es_mx/products/security/firewalls/what-is-a-firewall.html ',
    },
    {
      referencia: 'Fortinet. (2021). Administración unificada de amenazas.',
      link: 'https://www.fortinet.com/lat/products/smallbusiness/utm ',
    },
    {
      referencia:
        'Gómez, G. (2019). ¿Qué es el Cybersecurity Framework de NIST de los Estados Unidos? Esan Business.',
      link:
        'https://www.esan.edu.pe/conexion-esan/que-es-el-cybersecurity-framework-de-nist-de-los-estados-unidos ',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad [INCIBE]. (2017). Control de acceso. Políticas de seguridad para la pyme. Gobierno de España.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/control-de-acceso.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad [INCIBE]. (2020). ¿Qué son y para qué sirven los SIEM, IDS e IPS? ',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/son-y-sirven-los-siem-ids-e-ips ',
    },
    {
      referencia:
        'ISO. (2022). ISO/IEC 27001:2013 Information technology — Security techniques — Information security management systems — Requirements.',
      link: 'https://www.iso.org/standard/54534.html ',
    },
    {
      referencia:
        'Kuenzler, J. (2014). LDAP over SSL – LDAPs with Windows Server 2008 R2 (Secure LDAP). Active Directory Faq. ',
      link:
        'https://activedirectoryfaq.com/2014/04/ldap-over-ssl-ldaps-server-2008-r2/',
    },
    {
      referencia:
        'LISA Institute. (2019). Infraestructuras críticas: definición, planes, riesgos, amenazas y legislación.',
      link:
        'https://www.lisainstitute.com/blogs/blog/infraestructuras-criticas ',
    },
    {
      referencia: 'Malwarebytes. (2021). Malware.',
      link: 'https://es.malwarebytes.com/malware/#what-is-malware ',
    },
    {
      referencia:
        'Marty, R. (2013). Log Management and SIEM Vendors. Raffael Marty – Blog. ',
      link: 'https://raffy.ch/blog/2013/07/11/log-management-and-siem-vendors/',
    },
    {
      referencia:
        'Myers, L. (2016). Todo sobre cifrado: qué es y cuándo deberías usarlo. Welivesecurity. ',
      link:
        'https://www.welivesecurity.com/la-es/2016/02/09/todo-sobre-cifrado-cuando-usarlo/ ',
    },
    {
      referencia: 'NIST. (2021). Cybersecurity Framework.',
      link: 'https://www.nist.gov/cyberframework ',
    },
    {
      referencia:
        'Oficina de Seguridad del Internauta [OSI]. (2019). ¿Sabías que existen distintos tipos de cifrado para proteger la privacidad de nuestra información en Internet? ',
      link:
        'https://www.osi.es/es/actualidad/blog/2019/07/10/sabias-que-existen-distintos-tipos-de-cifrado-para-proteger-la-privacidad',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'proceso mediante el cual se busca verificar o validar que se esté cumpliendo una condición o la aplicación de un control.',
    },
    {
      termino: 'Control',
      significado:
        'mecanismo de tipo lógico o técnico con el cual se busca regular o establecer restricciones de alguna acción.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'es un marco de trabajo que provee los componentes y condiciones necesarias para su aplicación.',
    },
    {
      termino: 'Intrusión',
      significado:
        'acceso no autorizado a un sistema o activo de información sin consentimiento del propietario.',
    },
    {
      termino: '<em>Log</em>',
      significado:
        'registro secuencial sobre eventos presentados en un sistema de información.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'programa dañino que se instala en dispositivos y que puede generar daños o pérdida de información.',
    },
    {
      termino: 'Riesgo',
      significado:
        'es la probabilidad de que una amenaza se materialice generando alguna consecuencia negativa.',
    },
  ],
  complementario: [
    {
      tema: '1. Gestión de acceso',
      referencia:
        'Arroyo, D., Gayoso, V. y Hernández, L. (2020). ¿Qué sabemos de? Ciberseguridad. Editorial CSIC. ',
      tipo: 'Libro digital',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/172144',
    },
    {
      tema: '1. Gestión de acceso',
      referencia:
        'ISO. (2022). ISO/IEC 27001:2013 Information technology — Security techniques — Information security management systems — Requirements.',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      tema: '1. Gestión de acceso',
      referencia: 'NIST. (2021). Cybersecurity Framework. ',
      tipo: 'Norma técnica',
      link: 'https://www.nist.gov/cyberframework',
    },
    {
      tema: '2. Firewall ',
      referencia: 'Server World. (2020a). Apache2: Configure SSL/TLS. ',
      tipo: 'Artículo',
      link:
        'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=httpd&f=3 ',
    },
    {
      tema: '2. Firewall ',
      referencia: 'Server World. (2020b). FTP: Vsftpd Over SSL/TLS. ',
      tipo: 'Artículo',
      link: 'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=ftp&f=6 ',
    },
    {
      tema: '7.1 Tipos',
      referencia: 'Server World. (2020c). OpenSSH: Password Authentication. ',
      tipo: 'Artículo',
      link: 'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=ssh&f=1',
    },
    {
      tema: '2. Firewall ',
      referencia:
        'SeguriLatam. (2020). Seguridad en dispositivos móviles: ¿cuáles son las ciberamenazas más peligrosas? ',
      tipo: 'Artículo',
      link:
        'https://www.segurilatam.com/actualidad/ciberseguridad-seguridad-en-dispositivos-moviles-cuales-son-las-ciberamenazas-mas-peligrosas_20201005.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny patricia Ulloa Villamizar',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
