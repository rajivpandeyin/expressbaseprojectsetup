import { Client } from "@elastic/elasticsearch";

export class Elasticsearch {
    private connection;

    createConnection() {
        try {
            console.log("Elasticsearch Started: https://localhost:9200");
            this.connection = new Client({ node: "http://localhost:9200" });

            this.run();
        } catch (err) {
            console.log(err);
        }
    }

    async run () {
        await this.connection.index({
          index: 'game-of-thrones',
          id: '1',
          document: {
            character: 'Ned Stark',
            quote: 'Winter is coming.',
            times: 0
          }
        })
      
        await this.connection.update({
          index: 'game-of-thrones',
          id: '1',
          script: {
            lang: 'painless',
            source: 'ctx._source.times++'
            // you can also use parameters
            // source: 'ctx._source.times += params.count',
            // params: { count: 1 }
          }
        })
      
        const document = await this.connection.get({
          index: 'game-of-thrones',
          id: '1'
        })
      
        console.log(document)
      }
} 