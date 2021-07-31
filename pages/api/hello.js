// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    {dataPengunjung :[
      {name : 'alex goff', alamat : 'joyoboyo' },
      {name : 'koparman basa', alamat : 'jayapura'},
      {name : 'lolok lestari', alamat : 'kalipuro'} 
    ]
  }
  )
}
